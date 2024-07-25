import React, { useState, useEffect } from "react";
import axios from "axios";
import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  const [activeTab, setActiveTab] = useState("article");
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [allItems, setAllItems] = useState([]);
  const [copied, setCopied] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const itemsFromLocalStorage = localStorage.getItem(
      activeTab === "article"
        ? "articles"
        : activeTab === "youtube"
        ? "youtubeVideos"
        : "mp3Files"
    );
    if (itemsFromLocalStorage) {
      setAllItems(JSON.parse(itemsFromLocalStorage));
    }
  }, [activeTab]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (activeTab === "mp3") {
      return handleGenerateVoice();
    }

    const existingItem = allItems.find((item) => item.url === url);
    if (existingItem) {
      setTitle(existingItem.title);
      return setResult(existingItem.result);
    }

    setIsFetching(true);
    setError(null);

    try {
      let response;

      if (activeTab === "article") {
        response = await fetch("https://article-summarizer-backend-five.vercel.app/api/summarize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ articleUrl: url }),
        });
      } else {
        const fetchUrl = `https://article-summarizer-backend-6sr2o90uh-mostafalzohrys-projects.vercel.app/api/transcribe?videoUrl=${encodeURIComponent(
          url
        )}`;
        response = await fetch(fetchUrl, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unknown error");
      }

      const data = await response.json();
      console.log("Response Data:", data); 

      const newItem = {
        url,
        result:
          data.summary || data[0]?.transcriptionAsText || "No result available", 
        title: data.title || data[0]?.title || "No title available", 
        audioUrl: "",
      };

      setResult(newItem.result);
      setTitle(newItem.title);

      const updatedAllItems = [newItem, ...allItems];
      setAllItems(updatedAllItems);

      localStorage.setItem(
        activeTab === "article" ? "articles" : "youtubeVideos",
        JSON.stringify(updatedAllItems)
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setIsFetching(false);
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(""), 3000);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setUrl("");
    setResult("");
    setAudioUrl("");
  };

  const handleGenerateVoice = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5500/api/generatevoice",
        {
          text: result,
          voice: "alloy",
        },
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "audio/mpeg" })
      );
      setAudioUrl(url);

      const updatedItems = [...allItems, { url: "", result, audioUrl: url }];
      localStorage.setItem("mp3Files", JSON.stringify(updatedItems));
      setAllItems(updatedItems);
    } catch (err) {
      console.error("Error generating voice:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-8 w-full max-w-2xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`tab_btn ${
            activeTab === "article"
              ? "bg-blue-500 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300"
          } border rounded-md py-2 px-4 transition-colors duration-300 ease-in-out hover:bg-blue-100`}
          onClick={() => handleTabChange("article")}
        >
          Articles
        </button>
        <button
          className={`tab_btn ${
            activeTab === "youtube"
              ? "bg-blue-500 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300"
          } border rounded-md py-2 px-4 transition-colors duration-300 ease-in-out hover:bg-blue-100`}
          onClick={() => handleTabChange("youtube")}
        >
          YouTube Videos
        </button>
        <button
          className={`tab_btn ${
            activeTab === "mp3"
              ? "bg-blue-500 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300"
          } border rounded-md py-2 px-4 transition-colors duration-300 ease-in-out hover:bg-blue-100`}
          onClick={() => handleTabChange("mp3")}
        >
         Convert your text to Voice
        </button>
      </div>


      <div className="flex flex-col w-full gap-3">
        {activeTab !== "mp3" && (
          <form
            className="relative flex justify-center items-center"
            onSubmit={handleSubmit}
          >
            <img
              src={linkIcon}
              alt="link-icon"
              className="absolute left-0 my-2 ml-3 w-5"
            />
            <input
              type="url"
              placeholder={
                activeTab === "article"
                  ? "Paste the article link"
                  : "Paste the YouTube video link"
              }
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="url_input peer"
            />
            <button
              type="submit"
              className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
            >
              <p>↵</p>
            </button>
          </form>
        )}

        {activeTab === "youtube" && (
          <div className="bg-red-100 text-red-800 p-4 mb-4 rounded border border-red-300">
            <p className="font-satoshi font-medium text-sm">
            Please ensure your video has subtitles to enable us to process it.
            </p>
          </div>
        )}

        {activeTab === "mp3" && (
          <div className="flex flex-col gap-3">
            <textarea
              placeholder="Enter text for voice generation"
              value={result}
              onChange={(e) => setResult(e.target.value)}
              rows="4"
              className="textarea"
            />
            <div className="flex justify-center">
              <button
                onClick={handleGenerateVoice}
                className="bg-blue-500 text-white font-semibold py-1 px-3 rounded border border-blue-600 hover:bg-blue-600 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {loading ? "Generating..." : "Generate Voice"}
              </button>
            </div>
            {loading && (
              <div className="flex justify-center mt-4">
                <img src={loader} alt="loader" className="w-12 h-12" />
              </div>
            )}
            {audioUrl && !loading && (
              <div className="mt-4">
                <audio controls src={audioUrl} className="w-full">
                  Your browser does not support the <code>audio</code> element.
                </audio>
              </div>
            )}
            <div className="custom_scroll flex flex-col gap-1 max-h-60 overflow-y-auto">
              {allItems
                .filter((item) => item.audioUrl) // Filter items with audioUrl
                .reverse()
                .map((item, index) => (
                  <div
                    key={`mp3-${index}`}
                    onClick={() => setAudioUrl(item.audioUrl)}
                    className="link_card"
                  >
                    <div
                      className="copy_btn"
                      onClick={() => handleCopy(item.url)}
                    >
                      <img
                        src={copied === item.url ? tick : copy}
                        alt={copied === item.url ? "tick_icon" : "copy_icon"}
                        className="w-[40%] h-[40%] object-contain"
                      />
                    </div>
                    <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                      {item.result}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        )}

        {activeTab !== "mp3" && (
          <div className="custom_scroll flex flex-col gap-1 max-h-60 overflow-y-auto">
            {allItems
              .filter((item) => item.result)
              .reverse()
              .map((item, index) => (
                <div
                  key={`link-${index}`}
                  onClick={() => setResult(item.result)}
                  className="link_card"
                >
                  <div
                    className="copy_btn"
                    onClick={() => handleCopy(item.url)}
                  >
                    <img
                      src={copied === item.url ? tick : copy}
                      alt={copied === item.url ? "tick_icon" : "copy_icon"}
                      className="w-[40%] h-[40%] object-contain"
                    />
                  </div>
                  <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                    {item.result}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>

      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Well, that wasn&apos;t supposed to happen...
            <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error}
            </span>
          </p>
        ) : (
          result &&
          activeTab !== "mp3" && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                {activeTab === "article" ? "Article" : "Video"}{" "}
                <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-sm text-gray-700">
                  {result}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;

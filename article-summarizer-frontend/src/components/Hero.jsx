const Hero = () => {
  return (
    <header className='w-full max-w-3xl flex justify-center items-center flex-col'>
      <nav className='fixed top-0 w-full bg-slate-100 px-6 z-10'>
        <div className='max-w-2xl flex justify-between items-center mx-auto py-3'>
          <a
            href='https://www.linkedin.com/in/mostafalzohry/'
            target='_blank'
            rel='noreferrer'
            className='custom_logo'
          >
            K
          </a>
          <div className='flex gap-4'>
            <button
              type='button'
              onClick={() => {
                window.open('https://github.com/mostafalzohry');
              }}
              className='custom_btn'
            >
              GitHub
            </button>
            <button
              type='button'
              onClick={() => {
                window.open('https://www.linkedin.com/in/mostafalzohry/');
              }}
              className='custom_btn'
            >
              LinkedIn
            </button>
          </div>
        </div>
      </nav>

      <h1 className='head_text'>
        {/* See the magic with  */}
        <br className='max-md:hidden' />
        <span className='custom_gradient'>AI-Powered</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading and listening with Summarize:
        <br />
        - Get clear and concise summaries of lengthy articles.
        <br />
        - Transcribe YouTube podcasts and videos into readable text.
        <br />
        - Generate and download voice from text with ease
      </h2>



    </header>
  );
};

export default Hero;
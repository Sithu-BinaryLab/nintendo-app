import Image from "next/image";

// In progess....

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <section className="grid w-full bg-red-600 z-10 gap-y-8 md:gap-y-12 lg:gap-y-18 py-8">
        <div className="flex relative w-full  mx-auto">
          <Image
            src="/images/d-features-logo.avif"
            alt="Nintendo Switch 2 Logo"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <div className="absolute w-full top-0 right-0">
            <Image
              src="/images/d-features-tv.avif"
              alt="TV Mode"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute transition ease-in duration-300 -bottom-8 z-50 w-full md:w-1/2 right-0 md:right-8 lg:right-32">
            <Image
              src="/images/m-features-switch.avif"
              alt="Switch Console"
              width={300}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full px-4 md:px-8 gap-4 md:gap-x-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center py-4 gap-x-4">
              <span className="font-black text-3xl md:text-5xl">Available</span>
              <span className="font-black text-4xl md:text-7xl">6.5.2025</span>
            </div>
            <div className="border bg-black/25 hover:bg-black/50 cursor-pointer border-2 rounded-lg border-white text-center font-extrabold text-lg md:text-2xl py-4 w-full">
              How to buy
            </div>
          </div>
          <div className="border bg-black/25 hover:bg-black/50 cursor-pointer flex justify-center items-center border-2 rounded-lg border-white text-center font-extrabold text-lg md:text-2xl py-4">
            Overview Trailer
          </div>
        </div>
        <div className="flex w-full px-4 md:px-8 max-w-7xl mx-auto">
          <video
            width="100%"
            height="auto"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl w-full aspect-video"
          >
            <source src="/images/1-HW-top-montage-7s.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="px-4 md:px-8 gap-y-4 gap-x-4 items-center w-full grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
          <div className="flex flex-col gap-y-6 items-center justify-center text-center md:text-left">
            <span className="font-black text-3xl md:text-5xl px-4 md:px-8">
              <strong>See what&apos;s new with</strong>
            </span>
            <span className="font-black text-4xl md:text-7xl">
              Nintendo Switch 2
            </span>
          </div>
          <div className="font-normal flex flex-col text-base md:text-xl gap-y-6 md:gap-y-8">
            <p>The next evolution of the Nintendo Switch system is here!</p>
            <p>
              Bring games to life with a larger 1080p screen—or connect to a TV
              and play in up to 4K resolution*. Support for HDR and frame rates
              up to 120 fps let you enjoy vivid color, clarity, and smooth
              gameplay.
            </p>
            <p>
              Snap the new Joy-Con™ 2 controllers into place with magnetic
              connectors. Each controller can even be used as a mouse in
              compatible games.
            </p>
            <p>
              Experience new, exclusive games like Mario Kart™ World only on
              Nintendo Switch 2. Plus, you can enjoy compatible games from your
              Nintendo Switch library**.
            </p>
          </div>
        </div>
        <div className="px-4 md:px-8 w-full flex flex-col gap-y-5 text-center text-sm md:text-lg font-normal max-w-7xl mx-auto">
          <span>
            *TV and game must be compatible with 4K resolution. Frame rates are
            capped at 60 fps for 4K output.
          </span>
          <span>
            **Some Nintendo Switch games may not be supported or fully
            compatible with Nintendo Switch 2. Click here for more information
            on compatibility.
          </span>
        </div>
        <div>
          <div className="flex relative w-full max-w-7xl mx-auto">
            <div className="flex px-4 md:px-24">
              <video
                width="100%"
                height="auto"
                controls
                autoPlay
                muted
                loop
                playsInline
                className="border border-8 border-black w-full aspect-video"
              >
                <source
                  src="/images/HW-features-Handheld-Mode-MKW-7s.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <Image
              src="/images/Play-Mode-hardware.avif"
              alt="Play Mode"
              width={1200}
              height={400}
              className="absolute w-full -bottom-24 md:-bottom-48"
            />
          </div>
          <div className="justify-center align-center flex w-full pt-24 md:pt-48 pb-10 max-w-7xl mx-auto">
            <div className="border w-full md:w-1/3 justify-center rounded-lg align-center bg-black/25 hover:bg-black/50 cursor-pointer flex text-center items-center border-2 border-white text-center font-semibold text-lg md:text-2xl py-4">
              Learn more about this game
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-14 flex-col bg-white flex px-4 md:px-8 gap-y-8 md:gap-y-18 max-w-7xl mx-auto">
        <div className="gap-x-4 flex flex-col md:flex-row">
          <div className="grid grid-rows-2 gap-y-4">
            <Image
              src="/images/Features-Sayhello-Collage1-Image-1.avif"
              alt="Feature Image 1"
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
            <Image
              src="/images/Features-Sayhello-Collage1-Image-2.avif"
              alt="Feature Image 2"
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/images/Say-hello-to-GameChat-large-photo.avif"
              alt="GameChat Feature"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="grid grid-rows-2 gap-y-4">
            <Image
              src="/images/Features-Sayhello-Collage1-Image-5.avif"
              alt="Feature Image 5"
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
            <Image
              src="/images/Features-Sayhello-Collage1-Image-4.avif"
              alt="Feature Image 4"
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-gray-700 items-center justify-center">
          <div className="flex flex-col gap-y-8">
            <h2 className="font-bold text-5xl md:text-8xl">
              Say &quot;hello&quot; to GameChat
            </h2>
            <p className="font-semibold text-base md:text-xl">
              Start a chat with friends at any time using the C Button!
            </p>
            Collapse Wrap Copy
            <p className="font-semibold text-base md:text-xl">
              Share your game screen while chatting to show what you&apos;re up
              to. And for a more personal touch, connect face-to-face with the
              Nintendo Switch 2 camera or other compatible USB-C® camera (each
              sold separately).
            </p>
            <p className="font-thin text-sm md:text-md">
              Additional games, systems and/or accessories may be required for
              multiplayer mode. Internet, Nintendo Switch Online membership and
              Nintendo Account required for online features, including GameChat.
              Nintendo Switch 2 camera or compatible USB-C® camera required for
              video features. Not available in all countries. Terms and GameChat
              requirements apply. support.nintendo.com Games, systems,
              membership, and some accessories sold separately.
            </p>
          </div>
          <div>
            <Image
              src="/images/lifestyle-tableTop.avif"
              alt="Tabletop Lifestyle"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="py-8 md:py-14 bg-white flex px-4 md:px-8 gap-y-8 md:gap-y-18 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_4.6fr_1fr] w-full items-center gap-4">
          <Image
            src="/images/Joy-Con-L.avif"
            alt="Joy-Con Left"
            width={200}
            height={300}
            className="rounded-lg w-full h-auto"
          />
          <div className="flex justify-center">
            <video
              width="100%"
              height="auto"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl w-full aspect-video"
            >
              <source
                src="/images/HW-features-Handheld-Mode-DKB-7s.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <Image
            src="/images/Joy-Con-R.avif"
            alt="Joy-Con Right"
            width={200}
            height={300}
            className="rounded-lg w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}

import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
import { Play, Instagram, Twitter, Youtube } from "lucide-react";
// import  image  from "../../public/image.png"

export default function RapperLandingPage() {
  return (

    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="/" className="text-2xl font-bold tracking-tighter">
            ANI<span className="pl-1 text-blue-800">UNIQUE</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#music" className="text-sm font-medium hover:text-blue-500 transition-colors">
              MUSIC
            </a>
            <a href="#about" className="text-sm font-medium hover:text-blue-500 transition-colors">
              ABOUT
            </a>
            <a href="#tour" className="text-sm font-medium hover:text-blue-500 transition-colors">
              TOUR
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-500 transition-colors">
              CONTACT
            </a>
          </nav>
          <a
            href="https://www.youtube.com/@aniunique5"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block"
          >
            <Button
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-3xl"
            >
              STREAM NOW
            </Button>
          </a>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Landscape Image */}
      {/* <div className="pt-16">
        <img src="/ani.jpg" alt="ani" />
      </div> */}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-10">
          <img
            src="/ani.jpg"
            alt="Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        <div className="container relative z-10 px-4 mx-auto">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 to-blue-700">
              ANI UNIQUE
            </h1>
            <p className="text-xl md:text-2xl text-gray-50 mb-8 max-w-2xl">
              Breaking boundaries and dropping beats that will change the game forever
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.youtube.com/playlist?list=OLAK5uy_l33r8jycEscDr3UFNUfnPw0BdchZEbgFU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white w-full rounded-full">
                  <Play className="mr-2 h-5 w-5" /> Latest Release
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Latest Release */}
      <section id="music" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">LATEST RELEASE</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-4">"UNSTOPPABLE FLOW"</h3>
              <p className="text-gray-400 mb-6">
                The most anticipated album of the year has finally dropped. 16 tracks of pure fire that showcase the
                evolution of my sound and the depth of my lyrics.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://open.spotify.com/album/your-album-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-[#1DB954] hover:bg-[#1DB954]/90 text-white rounded-full">Spotify</Button>
                </a>
                <a
                  href="https://music.youtube.com/playlist?list=your-playlist-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white rounded-full">YouTube Music</Button>
                </a>
                <a
                  href="https://music.apple.com/album/your-album-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-[#FA243C] hover:bg-[#FA243C]/90 text-white rounded-full">Apple Music</Button>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative group">
              <div className="relative overflow-hidden rounded-lg shadow-2xl shadow-blue-500/20 transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src="/image.png"
                  alt="Album Cover - Unstoppable Flow"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <a
                    href="https://www.youtube.com/watch?v=2Zw5rjOwGc8&ab_channel=ANIUNIQUE-Topic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      size="lg"
                      className="bg-blue-500 hover:bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center"
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Tracks */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">

        <div className="container px-4 mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">TOP TRACKS</h2>
          
          <div className="grid gap-4 max-w-3xl mx-auto">
            {[
              { id: 1, title: "Track Title 1", duration: "3:21", image: "/track1.png" },
              { id: 2, title: "Track Title 2", duration: "3:22", image: "/track2.png" },
              { id: 3, title: "Track Title 3", duration: "3:23", image: "/track3.png" },
              { id: 4, title: "Track Title 4", duration: "3:24", image: "/track4.png" },
              { id: 5, title: "Track Title 5", duration: "3:25", image: "/track5.png" },
            ].map((track) => (
              <div
                key={track.id}
                className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <div className="mr-4 text-xl font-bold text-gray-500">{track.id}</div>
                <div className="mr-4 h-12 w-12 relative flex-shrink-0">
                  <img
                    src={track.image}
                    alt={`${track.title} cover art`}
                    className="rounded-full w-full h-full"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold">{track.title}</h3>
                  <p className="text-sm text-gray-400">Unstoppable Flow • 2023</p>
                </div>
                
                <div className="text-gray-400 text-sm">{track.duration}</div>
                <a
                  href="https://open.spotify.com/track/your-track-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="h-5 w-5 rounded-md" />
                  </Button>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://open.spotify.com/playlist/your-playlist-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                View All Tracks
              </Button>
            </a>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">ABOUT THE ARTIST</h2>
              <p className="text-gray-300 mb-6">
                Born and raised in the streets, ANI UNIQUE has been crafting his unique sound since the age of 13.
                With influences ranging from classic hip-hop to modern trap, his style defies categorization while
                staying true to the roots of rap.
              </p>
              <p className="text-gray-300 mb-6">
                After gaining millions of views on YouTube with his breakthrough single "Street Chronicles," he's been
                on a meteoric rise, collaborating with industry legends and pushing the boundaries of the genre.
              </p>
              {/* <div className="flex gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600">Full Bio</Button>
              </div> */}
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative h-[500px] w-full max-w-md mx-auto">
                <img
                  src="/image.png"
                  alt="Artist Portrait - Ani Unique"
                  className="object-cover rounded-lg shadow-2xl w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Section
      <section id="tour" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">UPCOMING SHOWS</h2>
          <div className="grid gap-4 max-w-3xl mx-auto">
            {[
              { date: "JUN 15", city: "New York, NY", venue: "Madison Square Garden" },
              { date: "JUN 22", city: "Los Angeles, CA", venue: "The Forum" },
              { date: "JUL 05", city: "Chicago, IL", venue: "United Center" },
              { date: "JUL 12", city: "Miami, FL", venue: "American Airlines Arena" },
              { date: "JUL 19", city: "Atlanta, GA", venue: "State Farm Arena" },
            ].map((show, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-stretch p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="sm:w-1/4 mb-4 sm:mb-0 flex flex-col items-center sm:items-start justify-center">
                  <div className="text-xl font-bold text-blue-500">{show.date}</div>
                  <div className="text-sm text-gray-400">2023</div>
                </div>
                <div className="sm:w-2/4 mb-4 sm:mb-0 flex flex-col items-center sm:items-start justify-center">
                  <div className="font-semibold text-center sm:text-left">{show.city}</div>
                  <div className="text-sm text-gray-400 text-center sm:text-left">{show.venue}</div>
                </div>
                <div className="sm:w-1/4 flex items-center justify-center sm:justify-end">
                  <Button size="sm">Get Tickets</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" className="border-white/20 hover:bg-white/10">
              View All Tour Dates
            </Button>
          </div>
        </div>
      </section> */}

      {/* Newsletter */}
      {/* <section id="contact" className="py-20 bg-black"> */}
      {/* <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">JOIN THE MOVEMENT</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to get exclusive updates, behind-the-scenes content, and early access to tickets and
              merchandise.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
              />
              <Button className="bg-blue-500 hover:bg-blue-600">Subscribe</Button>
            </div>
          </div>
        </div> */}
      {/* </section> */}

      {/* Social Media */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://instagram.com/aniunique" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <Instagram className="h-8 w-8" />
              </div>
              <span className="mt-2 text-sm">Instagram</span>
            </a>
            <a href="https://twitter.com/aniunique" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <Twitter className="h-8 w-8" />
              </div>
              <span className="mt-2 text-sm">Twitter</span>
            </a>
            <a href="https://youtube.com/@aniunique" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <Youtube className="h-8 w-8" />
              </div>
              <span className="mt-2 text-sm">YouTube</span>
            </a>
            <a href="mailto:contact@aniunique.com" className="flex flex-col items-center group">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                {/* <Mail className="h-8 w-8" /> */}
              </div>
              <span className="mt-2 text-sm">Contact</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-white/10" id="contact">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="/" className="text-xl font-bold tracking-tighter">
                ANI<span className="text-blue-500">UNIQUE</span>
              </a>
            </div>
            {/* <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-4 md:mb-0">
              <a href="#music" className="text-sm text-gray-400 hover:text-white transition-colors">
                Music
              </a>
              <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#tour" className="text-sm text-gray-400 hover:text-white transition-colors">
                Tour
              </a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div> */}
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} ANI UNIQUE. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
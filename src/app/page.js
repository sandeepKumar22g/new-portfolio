import {About, HeroSection, Navbar, Projects, EmailSection, Footer} from '@/components'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212] ">
            <Navbar />
            <div className='container mx-auto py-4 px-4 md:px-16 mt-24'>
                <HeroSection />
                <About />
                <Projects />
                <EmailSection />
            </div>
            <Footer />
        </main>
    )
}

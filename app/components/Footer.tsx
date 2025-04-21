import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
      <footer className="w-full bg-gray-800 text-black shadow-md py-4 px-8 flex justify-center items-center fixed bottom-0 left-0 right-0 z-50">

        <p className="text-sm text-center text-white">
          &copy; {currentYear} Cameron lowndes:| Follow me  on{" "}
          <a href="https://www.facebook.com/profile.php?id=61556621159422" className="underline">
            Facebook
          </a>{" "} |{" "}
          <Link href="/terms" className="underline">
            Terms
          </Link>{" "} 
          
        </p>
      </footer>
    );
}

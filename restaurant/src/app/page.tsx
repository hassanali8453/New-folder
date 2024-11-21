import About from "./Pages/about/page";
import HomePage from "./Pages/Home/page";
export default function Home() {
  return (
    <main>
      <HomePage />
      <About />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.090686853539!2d-0.1492272129816512!3d51.495113827716175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876051fb0c5bc3f%3A0x3f7294f05732829f!2sPremier%20Inn%20London%20Victoria%20hotel!5e0!3m2!1sen!2s!4v1732173466610!5m2!1sen!2s" width="600" height="450" className="w-full" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </main>
  );
}

import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-between gap-6 md:flex-row-reverse">
      <img
        src="/images/portrait.jpg"
        alt="Black and white headshot of Aleksander Klevjer"
        className="w-full max-w-64 rounded-full border border-gray-600 object-cover md:w-auto"
      />

      <div className="space-y-4">
        <Heading level="h1">Hello, I'm Aleksander.</Heading>
        <p className="md:max-w-sm">
          A front-end developer passionate about building intuitive, and accessible user
          experiences.
        </p>
        <Button path="#contact">Contact me</Button>
      </div>
    </section>
  );
}

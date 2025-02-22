import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Header from "../components/custom/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-text-primary flex items-center justify-center">
        <div className="max-w-[1200px] w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-playfair font-bold mb-4">
              Need help?
            </h1>
            <h2 className="text-2xl font-playfair font-semibold mb-6">
              Get in touch.
            </h2>
            <p className="text-text-secondary font-inter leading-relaxed">
              If you’re experiencing any issues, have questions, or need any
              assistance, please don’t hesitate to reach out to us. Whether
              you’re facing technical problems, have concerns about your
              account, or simply need more information about our services, we’re
              here to help.
            </p>
          </div>
          <div className="bg-card max-w-[700px] p-6 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-inter font-medium text-text-secondary mb-1">
                    First Name
                  </label>
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="bg-input font-inter text-text-primary border-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-inter font-medium text-text-secondary mb-1">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="bg-input font-inter text-text-primary border-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-inter font-medium text-text-secondary mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-input font-inter text-text-primary border-none"
                />
              </div>
              <div>
                <label className="block text-sm font-inter font-medium text-text-secondary mb-1">
                  Subject
                </label>
                <Input
                  type="text"
                  placeholder="Subject"
                  className="bg-input font-inter text-text-primary border-none"
                />
              </div>
              <div>
                <label className="block text-sm font-inter font-medium text-text-secondary mb-1">
                  How can we help?
                </label>
                <Textarea
                  rows="4"
                  placeholder="Your message..."
                  className="bg-input font-inter text-text-primary border-none"
                ></Textarea>
              </div>
              <div>
                <Button className="w-full font-inter bg-muted hover:bg-muted/80 text-text-primary">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

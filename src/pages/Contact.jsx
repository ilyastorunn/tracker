import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#1d1d1f] text-white py-10">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Need help?</h1>
          <h2 className="text-2xl font-semibold mb-6">Get in touch.</h2>
          <p className="text-gray-400 leading-relaxed">
            If you’re experiencing any issues, have questions, or need any
            assistance, please don’t hesitate to reach out to us. Whether you’re
            facing technical problems, have concerns about your account, or
            simply need more information about our services, we’re here to help.
          </p>
        </div>
        <div className="bg-[#1a191d] p-6 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  First Name
                </label>
                <Input
                  type="text"
                  placeholder="First Name"
                  className="bg-[#1d1d1f] text-white border-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Last Name
                </label>
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="bg-[#1d1d1f] text-white border-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <Input
                type="email"
                placeholder="Email"
                className="bg-[#1d1d1f] text-white border-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Subject
              </label>
              <Input
                type="text"
                placeholder="Subject"
                className="bg-[#1d1d1f] text-white border-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                How can we help?
              </label>
              <Textarea
                rows="4"
                placeholder="Your message..."
                className="bg-[#1d1d1f] text-white border-none"
              ></Textarea>
            </div>
            <div>
              <Button className="w-full bg-[#1d1d1f] hover:bg-[#1a191d]">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

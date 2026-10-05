import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-accentBlue/10 text-accentBlue rounded-xl border border-accentBlue/20">
          <Mail size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Get in Touch</h1>
          <p className="text-sm text-slate-400">
            Let's discuss opportunities or collaboration
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-cardBg border border-borderDark p-5 rounded-xl text-center">
          <Mail className="mx-auto text-accentBlue mb-2" size={20} />
          <h3 className="text-xs font-semibold text-slate-400 uppercase">
            Email
          </h3>
          <p className="text-sm text-white mt-1">mazeencdev@gmail.com</p>
        </div>
        <div className="bg-cardBg border border-borderDark p-5 rounded-xl text-center">
          <Phone className="mx-auto text-accentBlue mb-2" size={20} />
          <h3 className="text-xs font-semibold text-slate-400 uppercase">
            Phone
          </h3>
          <p className="text-sm text-white mt-1">347-757-1135</p>
        </div>
        <div className="bg-cardBg border border-borderDark p-5 rounded-xl text-center">
          <MapPin className="mx-auto text-accentBlue mb-2" size={20} />
          <h3 className="text-xs font-semibold text-slate-400 uppercase">
            Location
          </h3>
          <p className="text-sm text-white mt-1">Bronx, NYC</p>
        </div>
      </div>

      <form className="bg-cardBg border border-borderDark p-8 rounded-2xl space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">
            Your Name
          </label>
          <input
            type="text"
            className="w-full bg-darkBg border border-borderDark rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accentBlue text-sm"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">
            Your Email
          </label>
          <input
            type="email"
            className="w-full bg-darkBg border border-borderDark rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accentBlue text-sm"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full bg-darkBg border border-borderDark rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accentBlue text-sm"
            placeholder="Hello Mazeen, I'd like to talk about..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-accentBlue hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
        >
          Send Message <Send size={16} />
        </button>
      </form>
    </div>
  );
}

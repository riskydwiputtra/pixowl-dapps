import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 PixOwl DApps. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition">
              Terms
            </Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} Bùi Văn Sơn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

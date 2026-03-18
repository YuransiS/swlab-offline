export function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100 relative z-10">
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-gray-500 text-sm font-medium">
          SW LAB © 2026. Все права защищены.
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium">
          <a href="#" className="hover:text-[#111827] transition-colors">Политика конфиденциальности</a>
          <a href="#" className="hover:text-[#111827] transition-colors">Условия использования</a>
        </div>
        <div className="text-sm text-gray-500 font-medium hover:text-[#0052FF] transition-colors">
          <a href="mailto:hello@swlab.com">hello@swlab.com</a>
        </div>
      </div>
    </footer>
  );
}

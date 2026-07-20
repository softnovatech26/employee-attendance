const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-inner py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">

        <p className="text-gray-600 text-sm">
          © 2026 Employee Attendance System. All Rights Reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-blue-600">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-blue-600">
            Terms & Conditions
          </a>

          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
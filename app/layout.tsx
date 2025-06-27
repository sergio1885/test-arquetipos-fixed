export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body className="bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
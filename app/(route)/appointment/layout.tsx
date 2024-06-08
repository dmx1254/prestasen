export default function AppointMentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-h-screen w-full font-mulish">{children}</div>;
}

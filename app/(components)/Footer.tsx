import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container>
        <div className="py-10 text-sm text-white/60">
          © {new Date().getFullYear()} Matt H.. Built from small, relentless wins.
        </div>
      </Container>
    </footer>
  );
}

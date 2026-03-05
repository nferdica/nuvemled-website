export function GoogleMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.123!2d-51.9386!3d-23.4205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0b0a0a0a0a1%3A0x1!2sAv.+Melvin+Jones%2C+510+-+Zona+07%2C+Maring%C3%A1+-+PR!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
      className="w-full h-80 sm:h-96"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Localização NuvemLED - Av. Melvin Jones, 510, Maringá PR"
    />
  );
}

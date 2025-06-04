import Image from 'next/image';

export default function Logo() {
  return (
    <div className="relative w-32 h-32 sm:w-48 sm:h-48 flex items-center justify-center">
      <Image
        src="/logo.png"
        alt="Logo"
        width={400}
        height={62}
        className="object-contain select-none pointer-events-none scale-75 sm:scale-100"
        draggable={false}
      />
    </div>
  );
}
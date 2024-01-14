import { Raleway } from 'next/font/google';

export const headingFont = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
export default function Home() {
  return (
    <main>
      <h1 className={headingFont.className + ' font-semibold'}>
        this is the /
      </h1>
    </main>
  );
}

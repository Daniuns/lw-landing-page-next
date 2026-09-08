import Image, { type StaticImageData } from "next/image";
import styles from "./library.module.css";

type LibraryData = {
  name: string;
  description: string[];
  src: StaticImageData;
  alt: string;
};

type LibraryItemProps = { data: LibraryData; index: number };

export default function LibraryItem({
  data,
  index,
}: Readonly<LibraryItemProps>) {
  const volumeNumber = String(index + 1).padStart(2, "0");
  const isReversed = index % 2 !== 0;

  return (
    <article
      className={`${styles.entry} ${isReversed ? styles.entryReversed : ""}`}
    >
      <div className={styles.volume} aria-hidden="true">
        {volumeNumber}
      </div>
      <div className={styles.illustration}>
        <Image
          src={data.src}
          alt={data.alt}
          className={styles.image}
          sizes="(max-width: 767px) 72vw, (max-width: 1200px) 32vw, 350px"
        />
      </div>
      <div className={styles.details}>
        <p className={styles.catalogue}>Acervo · tomo {volumeNumber}</p>
        <h2 className={styles.title}>{data.name}</h2>
        <div className={styles.divider} aria-hidden="true">
          <span>✦</span>
        </div>
        <p className={styles.label}>Trecho preservado</p>
        <div className={styles.description}>
          {data.description.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

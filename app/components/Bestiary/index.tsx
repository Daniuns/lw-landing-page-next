import Image, { type StaticImageData } from "next/image";
import styles from "./bestiary.module.css";

type MonsterData = {
  name: string;
  description: string[];
  src: StaticImageData;
  alt: string;
};

type MonsterProps = { data: MonsterData; index: number };

export default function Monster({ data, index }: Readonly<MonsterProps>) {
  const registryNumber = String(index + 1).padStart(2, "0");
  const isReversed = index % 2 !== 0;

  return (
    <article
      className={`${styles.entry} ${isReversed ? styles.entryReversed : ""}`}
    >
      <div className={styles.entryNumber} aria-hidden="true">
        {registryNumber}
      </div>
      <div className={styles.illustrationPanel}>
        <div className={styles.imageFrame}>
          <Image
            src={data.src}
            alt={data.alt}
            className={styles.creatureImage}
            sizes="(max-width: 767px) 78vw, (max-width: 1200px) 40vw, 440px"
          />
        </div>
      </div>
      <div className={styles.notesPanel}>
        <div className={styles.notesHeader}>
          <p className={styles.registry}>
            Registro de criatura · {registryNumber}
          </p>
          <h2 className={styles.name}>{data.name}</h2>
          <div className={styles.rule} aria-hidden="true">
            <span />
          </div>
        </div>
        <div className={styles.notesDetails}>
          <p className={styles.noteLabel}>Observações</p>
          <div className={styles.description}>
            {data.description.map((desc, descriptionIndex) => (
              <p key={descriptionIndex}>{desc}</p>
            ))}
          </div>
          <div className={styles.warning}>
            <span aria-hidden="true">✦</span>
            <p>Manuseie este registro com cautela.</p>
          </div>
        </div>
      </div>
    </article>
  );
}

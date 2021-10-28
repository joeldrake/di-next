import About from '@/components/presentation/About';
import Image from 'next/image';

const PL = () => {
  return (
    <div className="PL">
      <div className="siteWidth siteSidePadding">
        <h1>Joel Drake</h1>

        <Image
          src={'/images/joeldrake.jpg'}
          alt={'Joel Drake'}
          width={'1600'}
          height={'1067'}
          sizes={'50%'}
        />
      </div>
      <About hideHeader={true} />

      <style jsx>{`
        .PL {
          line-height: 1.2;
          padding-top: 1em;
        }

        .PL h1 {
          font-family: Times, 'Times New Roman', Serif;
          font-size: 5em;
          letter-spacing: -2px;
          margin: 0;
          margin-bottom: 1rem;
        }

        .PL :global(.sectionPadding) {
          padding-top: 1em;
        }
        .PL :global(#about) {
          min-height: 0;
        }

        @media print {
          .PL {
            font-size: 28px;
            max-width: 100%;
          }

          .PL :global(.siteWidth) {
            max-width: 960px;
          }

          .PL :global(#about) {
            page-break-after: initial;
          }

          @page {
            size: auto;
            margin: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default PL;

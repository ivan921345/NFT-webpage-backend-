import DigitalMarketplaceDescription from './DigitalMarketplaceDescription';
import NftExamples from './NftExamples';
import './DigitalMarketplace.scss';
function DigitalMarketplace() {
  return (
    <section className="digitalMarketplace__section">
      <DigitalMarketplaceDescription />
      <NftExamples />
    </section>
  );
}

export default DigitalMarketplace;

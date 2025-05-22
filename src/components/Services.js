import React from 'react';

const Services = () => {
  // Service items data
  const serviceItems = [
    {
      icon: "fa-solid fa-toilet fs-1",
      title: "BATHROOM",
      description: "We install a wide variety of materials to make your bathroom space amazing! During the initial consultation, we can offer suggestions about materials/ colors/ designs to enhance your bathroom space. As for lead time, a standard remodel on most bathrooms is 2 weeks. A customized bathroom remodel is about 4 to 6 weeks."
    },
    {
      icon: "fa-solid fa-sink fs-1",
      title: "KITCHEN",
      description: "The kitchen should be a practical workstation, and yet warm and inviting. Perfect Remodeling, LLC performs all tasks from tile, flooring, lighting, electrical, plumbing, and the rest, streamlining your project. We don't juggle multiple jobs but stay focused on your project to completion. Speed and accuracy are key! Standard kitchen remodel is 3 to 4 weeks. Complex, higher end kitchen remodels average 6 weeks."
    },
    {
      icon: "fa-solid fa-tree fs-1",
      title: "OUTDOOR PATIO / DECK",
      description: "The great outdoors! We build new patios, decks, covers, bridges, and pergolas to suit your style. We utilize natural woods, composites, stone, pavers, finished to compliment your current motif. We also offer repair work on your current structures! Let us convert your outdoor living space into a place to relax and unwind."
    },
    {
      icon: "fa-solid fa-fire fs-1",
      title: "FIREPLACE",
      description: "Give your fireplace an exciting new look with a total makeover! Let us enhance your fireplace by refacing the original surface with ledger stone, or other materials, new hearthstone(s), and mantlepiece. There are a wide variety of designs and textures available. We'll suggest materials to compliment the surrounding living areas."
    },
    {
      icon: "fa-solid fa-stairs fs-1",
      title: "STAIRCASES AND HANDRAILS",
      description: "Give your staircase that WOW factor by converting to hard materials! Natural wood and faux wood products bring a contemporary look to any staircase. Natural hardwoods are timeless and beautiful, plus they are versatile because of the variety of finishes available. Faux wood \"engineered\" laminate and vinyl materials are gaining in popularity due to their resilience and durability. Let us measure your space and give you a quote!"
    },
    {
      icon: "fa-solid fa-hammer fs-1",
      title: "MISCELLANEOUS REPAIRS / UPGRADES",
      description: "We do just about any household project that you may need! Give us your \"to do\" list and we'll take care of it! We do plumbing, electrical, lighting fixtures, ceiling fans, appliance swaps, toilets, sinks, faucets, doors, windows, drywall, sheetrock, painting, flood damage, flooring repairs, handles, rails, and many others."
    }
  ];

  return (
    <section className="page-section" id="services">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">At Your Service</h2>
        <hr className="divider" />
        <div className="row g-4">
          {serviceItems.map((service, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="service-item p-4 h-100">
                <div className="text-center">
                  <div className="mb-2"><i className={service.icon}></i></div>
                  <h3 className="h4 mb-3">{service.title}</h3>
                  <p className="text-muted mb-0">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
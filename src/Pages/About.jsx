import { useState } from "react";

const About = () => {
  const [body, setBody] = useState("story");
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(src/assets/about-bg.jpg)",
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ paddingTop: "250px", fontSize: "70px" }}>Our Story</h1>
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>
          Founded in 1930, Himalaya remains family owned with products offered
          in over 100 countries.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "50px",
          borderBottom: "1px solid red",
        }}
      >
        <button
          style={{
            fontWeight: "bold",
            padding: "10px",
            fontSize: "20px",
            border: "none",
            backgroundColor: "white",
            cursor: "pointer",
            color: "green",
          }}
          onClick={() => setBody("story")}
        >
          OUR STORY
        </button>
        <button
          style={{
            fontWeight: "bold",
            padding: "10px",
            fontSize: "20px",
            border: "none",
            backgroundColor: "white",
            cursor: "pointer",
            color: "green",
          }}
          onClick={() => setBody("roots")}
        >
          OUR ROOTS
        </button>
        <button
          style={{
            fontWeight: "bold",
            padding: "10px",
            fontSize: "20px",
            border: "none",
            backgroundColor: "white",
            cursor: "pointer",
            color: "green",
          }}
          onClick={() => setBody("process")}
        >
          OUR PROCESS
        </button>
        <button
          style={{
            fontWeight: "bold",
            padding: "10px",
            fontSize: "20px",
            border: "none",
            backgroundColor: "white",
            cursor: "pointer",
            color: "green",
          }}
          onClick={() => setBody("science")}
        >
          OUR SCIENCE
        </button>
        <button
          style={{
            fontWeight: "bold",
            padding: "10px",
            fontSize: "20px",
            border: "none",
            backgroundColor: "white",
            cursor: "pointer",
            color: "green",
          }}
          onClick={() => setBody("initiatives")}
        >
          OUR INITIATIVES
        </button>
      </div>
      {body === "story" ? (
        <div style={{ margin: "50px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              style={{ width: "50%" }}
              src="src\assets\sabout-story-1.avif"
              alt=""
            />
            <div style={{ width: "50%" }}>
              <h2
                style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}
              >
                From Humble Beginnings
              </h2>
              <p style={{ fontSize: "20px" }}>
                While riding through the forests of Burma, our founder, Mr. M.
                Manal, saw a villager pacify a restless elephant by feeding it
                the root of the plant Rauwolfia serpentina. Fascinated by the
                plant's effect on the elephant, he returned home to India to
                seek scientific evidence for why this particular plant would
                have such a beneficial, calming effect. Young Manal's mother
                gave him her bangles to sell so he could pursue his work, and
                Himalaya was born. Once he fully understood the science behind
                this special botanical, Mr. Manal bought a hand-operated,
                tablet-compressing machine and began his work. At night, his
                shoulders would ache from producing a few hundred tablets, one
                small tablet at a time. But his hard work paid off. This
                remarkable plant would later become Serpina, the world’s first
                anti-hypertensive drug in 1934. We remain in awe of the man who
                began our company, and the grandfather of our current CEO,
                Nabeel Manal. Himalaya’s legacy has always been one of
                researching nature and using the tools of modern science to
                develop and produce Ayurveda-based, pharmaceutical-grade herbal
                medicine products. And today, that legacy continues. Mr. Manal
                had a vision of helping people be well. Today, Himalaya Herbal
                Healthcare has turned a time-honored herbal tradition into a
                complete range of contemporary, proprietary formulas and single
                herbs products.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "50%" }}>
              <h2
                style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}
              >
                The Himalaya Legacy Now Spans Over 90 Years
              </h2>
              <p style={{ fontSize: "20px" }}>
                Founded in 1930, the Himalaya legacy now spans over 90 years,
                stretching from one man, to his son, to his grandson. From our
                humble beginnings in India, our products are now offered in over
                100 countries, yet we’re still family owned. Himalaya offers a
                full line of clinically-studied herbal formulations, certified
                USDA organic Single herbs, and a full line of body care
                products. Integrating the principles of traditional medicine
                with modern science, Himalaya is a worldwide pioneer in the
                field of scientifically validated herbal healthcare. Himalaya's
                North American LEED® Gold-Certified eco-friendly corporate
                office and warehouse facility are located in Sugar Land, Texas,
                a community neighboring Houston.
              </p>
            </div>
            <img
              style={{ width: "50%" }}
              src="src\assets\sabout-story-2.avif"
              alt=""
            />
          </div>
        </div>
      ) : (
        <></>
      )}
      {body === "roots" ? (
        <div style={{ textAlign: "center", margin: "50px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              style={{ width: "50%", height: "400px" }}
              src="src\assets\about-root.webp"
              alt=""
            />
            <div style={{ width: "50%" }}>
              <h2
                style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}
              >
                Our Roots
              </h2>
              <p style={{ fontSize: "20px" }}>
                The herbs used in Himalaya Herbal Healthcare's scientific
                product line are also used in the world's oldest traditional
                system of medicine, Ayurveda, which dates back over 4,000 years.
                The word Ayurveda comes from the Sanskrit root words ayur,
                meaning “life” and veda, meaning “to know.” Ayurveda literally
                means "to know life,” or in the language of today, “the science
                of life.” Ayurveda had a profound, far-reaching influence on
                Traditional Chinese Medicine and the healthcare systems of many
                other countries and cultures that followed. Today, thanks to the
                dedicated efforts of Himalaya’s doctors and scientists, it’s
                been proven effective through scientific validation. Ayurveda
                acknowledges there are five elements that make up the universe
                and the human body; earth, water fire, air and space. It seeks
                to bring the constellation and characteristics of the three body
                types defined by those elements – the vata, pitta and kapha –
                back into balance through proper diet, herbal treatment, and
                emotional well-being. We’re proud of the ancient roots and our
                modern branches that allow us to continue unlocking the powerful
                healing benefits of Ayurveda, but our formulas are science-based
                and appropriate for all body types. They require no Ayurvedic
                knowledge to be used successfully.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {body === "process" ? (
        <div style={{ margin: "50px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              style={{ width: "50%", height: "400px" }}
              src="src\assets\about-process-1.webp"
              alt=""
            />
            <div style={{ width: "50%" }}>
              <h2
                style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}
              >
                Purity and Efficacy
              </h2>
              <p style={{ fontSize: "20px" }}>
                The complexity and timing of the entire seed-to-shelf process
                for Himalaya and for the plants themselves, is highlighted by
                three important mandates: purity, efficacy, and batch-to-batch
                consistency. We know the success of traditional plant medicine
                is based on several integral parts that extend from the most
                advanced agricultural research and practices, to extraction
                methodologies, to formulating approaches and dosage strategies.
                To accomplish all of this, Himalaya maintains total control over
                the farming, harvesting, research, manufacturing, and
                distribution of all our products.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "50%" }}>
              <h2
                style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}
              >
                Our Farms
              </h2>
              <p style={{}}>
                Himalaya's herbs are grown on over 1,000 acres of farmland
                through fair trade, farming partnerships. Herbs are also
                sustainably wildcrafted on over 5,000 acres. Farms are located
                in regions most suitable to the individual herb so that the best
                possible quality and potency are achieved in the harvest. Just
                as one wine grape has more character and flavor when grown in a
                very specific region, the plants used in healthcare often
                perform best when they’re grown and harvested in their own
                unique native soil. Himalaya chooses farm lands based on soil
                fertility, suitability and quality, visiting the selected land
                first to ensure the land is free from soil and water erosion,
                free from pollution and away from industrial zones, free from
                municipal waste and the flow of rain water from neighboring
                fields. Farmers are trained in preparing the land, through to
                post-harvest management of the herbs, and even in proper drying,
                packaging, storing and labeling. Himalaya’s farmers use only
                authenticated starting materials; viable seeds with a good
                germination percentage. A respective Package of Practices (POP)
                assures adherence to quality, sustainability and careful
                environmental stewardship at all times. Farmers are trained on
                earth-friendly organic practices, soil bed preparation, proper
                irrigation, fertilization and sustainable harvesting, crop
                rotation, cover crop cultivation and organic soil enrichment. No
                pesticides are allowed to be used. Careful safety measures are
                put in place for handling threatened plant populations, and
                farmers are continually trained on the Good Cultivation
                Practices specific to each herb. In addition, farmers are
                trained on Good Agriculture Collection Practices as well. In
                addition to initial training, two residential workshops are
                conducted per year, and supervisors visit the farmer’s field
                regularly to check for compliance in areas such as proper crop
                management, no chemical usage, no child labor, and appropriate
                labor hours for adults. Violations do not occur. Himalaya’s
                agricultural supervisory teams visit farms quarterly, but the
                frequency of visits may increase depending on the individual
                needs of the farmer. Himalaya’s inspectors and trainers include
                our own people with Masters Degrees in botany, MBAs in
                agri-business management, along with agricultural scientists
                from reputed universities.
              </p>
            </div>
            <img
              style={{ width: "50%", height: "400px" }}
              src="src\assets\about-process-2.webp"
              alt=""
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              style={{ width: "50%", height: "400px" }}
              src="src\assets\about-process-3.webp"
              alt=""
            />
            <div style={{ width: "50%" }}>
              <h2
                style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}
              >
                Our Manufacturing
              </h2>
              <p style={{ fontSize: "20px" }}>
                In March 2001, Himalaya was granted a Good Manufacturing
                Practices (GMP) certificate, issued by the Licensing Authority,
                Directorate of Indian Systems of Medicine, Bangalore, India.
                Himalaya is the first Ayurvedic facility in India to receive GMP
                certification. We have also been granted Good Laboratory
                Practice (GLP) certification. A GLP certification is granted to
                manufacturing companies that adhere to the toxicity guidelines
                in nonclinical safety studies. The certification is granted by
                the National Good Laboratory Practice (GLP) Compliance
                Monitoring Authority, Department of Science and Technology,
                Government of India. Only 14 institutions in India have been
                granted this certificate, and Himalaya is the first herbal
                company to join their ranks.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {body === "science" ? (
        <div style={{ margin: "50px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              style={{ width: "50%", height: "400px" }}
              src="src\assets\about-science-1.avif"
              alt=""
            />
            <div style={{ width: "50%" }}>
              <h2
                style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}
              >
                Our Science
              </h2>
              <p style={{ fontSize: "20px" }}>
                Himalaya's core interest has always been to ensure the health
                benefits of our herbal formulas and standalone solo herbs with
                product-specific, double-blind, placebo-controlled human
                clinical trials on all of our products. Our commitment to
                Ayurvedic principles, and research to produce natural, safe, and
                effective health products is driven by our soul mission, which
                is to help individual people maintain a healthy, long, and
                high-quality of life. We take pride in the fact that our
                formulas undergo years of primary research before we offer them
                to you. Our commitment to ensure we have product-specific
                science on hand before we launch a product into the marketplace
                is exceptional within the natural products industry. Himalaya
                has conducted over 1,200 clinical studies, many of which have
                been published in numerous, highly-regarded medical journals
                including The European Journal of Pharmacology, Phytotherapy
                Research, The Indian Journal of Clinical Practice, Australian
                Journal of Medical Herbalism, and JAMA, India.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "50%" }}>
              <h2
                style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}
              >
                Our Distribution
              </h2>
              <p style={{ fontSize: "20px" }}>
                After being grown, manufactured and packaged in India, finished
                Himalaya products are shipped to our North American corporate
                office, warehouse and distribution center located in Sugar Land,
                Texas. Here we maintain state-of-the-art storage and shipping
                processes in climate-controlled environments until our products
                make their way to our retailers, and then to your home.
              </p>
            </div>
            <img
              style={{ width: "50%", height: "400px" }}
              src="src\assets\about-science-2.avif"
              alt=""
            />
          </div>
        </div>
      ) : (
        <></>
      )}
      {body === "initiatives" ? (
        <div style={{ margin: "50px" }}>
          <div style={{ width: "100%" }}>
            <h2
              style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}
            >
              Biodiversity Conservation for Sustainable Living
            </h2>
            <p style={{ fontSize: "20px" }}>
              Care for the earth remains a cornerstone of Himalaya Wellness
              Company’s core philosophy. Biodiversity for sustainable living is
              the practice of protecting and preserving the variety of species,
              habitats, ecosystems, and genetic diversity on earth, and Himalaya
              has made this an important part of our mission since we started
              over 90 years ago. The video you're about to see shows Himalaya
              Wellness Company's initiatives in conservation, sustainability and
              replanting. Himalaya believes in nurturing the goodness of nature
              with a promise to safeguard the environment and a pledge to
              restore and conserve biodiversity.
            </p>
          </div>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              style={{ width: "50%", height: "400px" }}
              src="src\assets\about-init-1.webp"
              alt=""
            />
            <div style={{ width: "50%" }}>
              <h2
                style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}
              >
                Commitment to Farmers
              </h2>
              <p style={{ fontSize: "20px" }}>
                Himalaya works one-on-one with farmers and through
                non-governmental organizations to help bring poorer farming
                communities a link to the marketplace. Through fair trade
                cooperative agreements, our goal is to help economically empower
                small and marginal farmers so they can further their livelihood.
                Himalaya’s fair trade practices assure farmers are paid a
                minimum of 15-20% higher than the actual cost of cultivation. In
                addition to favorable wages, other benefits to the farmers
                include an assured market for their crops, an assured price and
                income (we protect them from the ups and downs of the market),
                and the costs for their required certifications, packaging and
                transportation are borne by us, not them.
              </p>
            </div>
          </div> <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "50%" }}>
              <h2
                style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}
              >
                Partnership with Vitamin Angels
              </h2>
              <p style={{ fontSize: "20px" }}>
                Himalaya continues to be a proud supporter of Vitamin Angels, a
                worldwide non-profit organization helping to save the lives and
                eyesight of nutrient deficient children. Vitamin Angels reduces
                child mortality by connecting infants and children under five
                with vital nutrients. It only takes 50¢ to reach one child twice
                a year with enough vitamin A to reduce childhood mortality by
                24% and ensure a child's eyesight. Vitamin Angels gives children
                a chance for a brighter future, and Himalaya is proud to be an
                ongoing supporter of their work.
              </p>
            </div>
            <img
              style={{ width: "50%", height: "400px" }}
              src="src\assets\about-init-2.webp"
              alt=""
            />
          </div><hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              style={{ width: "50%", height: "400px" }}
              src="src\assets\about-init-3.webp"
              alt=""
            />
            <div style={{ width: "50%" }}>
              <h2
                style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}
              >
                Trees for Life
              </h2>
              <p style={{ fontSize: "20px" }}>
                Himalaya has been planting trees in the Western Ghats of India
                since 2011. The Western Ghats is identified as a biodiversity
                hotspot by UNESCO, the United Nations Educational, Scientific
                and Cultural Organization. To date, we have planted 750,000
                trees, covering 900 acres in partnership with a local
                non-government organization, the Society for Environment and
                Biodiversity Conservation. Himalaya supports the planting of a
                mix of fruit, fodder, endemic, medicinal and other trees that
                support the local ecology and biodiversity. Some of the
                medicinal trees planted include Ashwagandha, Arjuna, Amla and
                Hirada. The program also supports the planting of fruit trees
                such as mango, papaya, banana and cashew nut, which generate
                income to local farmers in the program and serve as
                supplementary nutrition. In addition, we have also planted
                Abutilon ranadei, a native plant that is critically endangered.
              </p>
            </div>
          </div><hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "50%" }}>
              <h2
                style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}
              >
                Certification for Environmental Management
              </h2>
              <p style={{ fontSize: "20px" }}>
                Himalaya has taken several steps to conserve water, power and
                reduce pollution to meet National Quality Assurance (NQA)
                guidelines. The most significant achievement has been setting up
                a water treatment plant and sourcing water with low Total
                Dissolved Solids (TDS) externally. This has reduced Himalaya’s
                water consumption by as much as 10,000 liters a day. Himalaya
                has been awarded ISO-14001:2004 certification, the most
                recognized standard globally, for environment management. The
                certification is granted by National Quality Assurance (NQA),
                the UK's largest established certification body.
              </p>
            </div>
            <img
              style={{ width: "50%", height: "400px" }}
              src="src\assets\about-init-4.webp"
              alt=""
            />
          </div>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              style={{ width: "50%", height: "400px" }}
              src="src\assets\about-init-5.webp"
              alt=""
            />
            <div style={{ width: "50%" }}>
              <h2
                style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}
              >
                Autism Hope Alliance
              </h2>
              <p style={{ fontSize: "20px" }}>
                Himalaya Herbal Healthcare is a proud Autism Approved® sponsor
                of the Autism Hope Alliance. Himalaya’s continued charitable
                donation helps support families facing an autism diagnosis. The
                Autism Hope Alliance embodies hope for families through
                education, financial support and volunteerism. They are also the
                first nonprofit foundation for Autism to emerge from the natural
                foods industry.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default About;

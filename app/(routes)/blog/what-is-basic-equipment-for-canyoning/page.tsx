import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is the basic equipment for canyoning? (2026) | TUUR Adventure",
  description:
    "Discover the essential canyoning equipment: wetsuit, helmet, harness and footwear. Everything you need to enjoy canyoning safely and comfortably.",
};

export default function BasicEquipmentCanyoningPage() {
  return (
    <article className="pt-26 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Article Header ── */}
        <header className="mb-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-green-600">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Basic Equipment for Canyoning</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What is the Basic Equipment for Canyoning?
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <span>By TUUR Adventure Experts</span>
            <span>•</span>
            <time dateTime="2026-04-08">April 8, 2026</time>
            <span>•</span>
            <span>10 min read</span>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden mb-8">
            <Image
              src="/basic-equipment-1.webp"
              alt="Basic canyoning equipment"
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* ── Article Content ── */}
        <div className="prose prose-lg prose-gray max-w-none">
          {/* ── Intro ── */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Canyoning is an adventure sport with different{" "}
            <Link
              href="/blog/what-is-canyoneering"
              className="font-semibold underline underline-offset-2 hover:text-orange-500 transition-colors"
            >
              <strong>
                <u>levels of difficulty</u>
              </strong>
            </Link>
            . Although some people may think that no special equipment is needed
            for lower level canyoning, as it can be confused with a &apos;simple
            river walk&apos;, it is important to be aware that canyoning, like
            all outdoor adventure activities, can involve some considerable
            risks: slippery surfaces and the possibility of injury from sharp
            objects such as stones and branches, or even falling rocks from the
            canyon walls, are more common than people think. In addition,
            prolonged exposure to cold water can cause discomfort or even
            cold-related health problems.
          </p>
          <p className="text-gray-700 mb-10 leading-relaxed">
            Fortunately, whether the slopes are small or large,{" "}
            <strong>
              these risks can be greatly reduced with the right equipment.
            </strong>
          </p>

          {/* ── Table of Contents ── */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              📋 Table of Contents
            </h2>
            <nav className="space-y-2">
              <a
                href="#basic-equipment"
                className="block text-green-600 hover:text-green-700"
              >
                1. What basic equipment do I need to go canyoning?
              </a>
              <a
                href="#wetsuit"
                className="block text-green-600 hover:text-green-700"
              >
                2. Wetsuit or Neoprene suit
              </a>
              <a
                href="#helmet"
                className="block text-green-600 hover:text-green-700"
              >
                3. Helmet
              </a>
              <a
                href="#harness"
                className="block text-green-600 hover:text-green-700"
              >
                4. Harness
              </a>
              <a
                href="#footwear"
                className="block text-green-600 hover:text-green-700"
              >
                5. Footwear
              </a>
              <a
                href="#additional"
                className="block text-green-600 hover:text-green-700"
              >
                6. Additional Equipment for Canyoning
              </a>
              <a
                href="#conclusion"
                className="block text-green-600 hover:text-green-700"
              >
                7. Conclusion
              </a>
            </nav>
          </div>

          {/* ══════════════════════════════════════════
              H2 – Basic equipment
          ══════════════════════════════════════════ */}
          <h2
            id="basic-equipment"
            className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
          >
            What basic equipment do I need to go canyoning?
          </h2>

          {/* ── Image 2 ── */}
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src="/basic-equipment-2.webp"
              alt="Canyoning equipment overview"
              fill
              className="object-cover"
            />
          </div>

          <p className="mb-4 text-lg leading-relaxed">
            The basic equipment for canyoning consists of 4 main elements:{" "}
            <strong>
              Wetsuit, helmet, harness (with lanyards and descender) and
              footwear.
            </strong>
          </p>
          <p className="mb-12 text-lg leading-relaxed">
            Some people neglect to use this equipment, sometimes due to cost,
            but mostly because of a lack of awareness. However, as you will see
            next,{" "}
            <strong>
              all these items are essential to enjoy canyoning in safety and
              comfort.
            </strong>
          </p>

          {/* ══════════════════════════════════════════
              Wetsuit
          ══════════════════════════════════════════ */}
          <h3 id="wetsuit" className="mb-4 text-2xl font-bold text-gray-900">
            Wetsuit or Neoprene suit
          </h3>

          {/* ── Image 3 ── */}
          <div
            className="relative mb-6 w-full overflow-hidden rounded-2xl"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src="/basic-equipment-3.webp"
              alt="Full body canyoning wetsuit"
              fill
              className="object-contain"
            />
          </div>

          <p className="mb-4 text-lg leading-relaxed">
            This is a neoprene suit, similar to that used for diving or surfing,
            which in the case of canyoning can also be one or two-piece. This
            suit allows us to <strong>retain our body heat</strong> and,
            depending on its thickness, will <strong>protect us</strong> from
            small bumps and scratches, as well as giving us{" "}
            <strong>extra buoyancy</strong> in case of need or rescue.
          </p>

          <h4 className="mb-3 mt-8 text-xl font-bold text-gray-900">
            Two-piece wetsuit
          </h4>
          <p className="mb-4 text-lg leading-relaxed">
            The two-piece suit consists of a sleeveless overall and a jacket, so
            that <strong>the chest area has double insulation</strong> covering
            the vital organs. The most commonly used two-piece suits are 5mm
            thick and are very versatile as they can be used as{" "}
            <strong>full suits in colder seasons</strong>, or{" "}
            <strong>just the overalls in the hottest months</strong>.
          </p>

          <h4 className="mb-3 mt-8 text-xl font-bold text-gray-900">
            One-piece wetsuit
          </h4>
          <p className="mb-4 text-lg leading-relaxed">
            The one-piece suits are very comfortable and allow greater mobility.
            Although they are less versatile, they are also a little tighter
            fitting and allow less water to get in during jumps. One-piece
            wetsuits are usually used for children as they are more flexible.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Both one-piece and two-piece wetsuits{" "}
            <strong>usually have a hood</strong>, which we will use in the case
            of a winter canyon or thawing water.
          </p>

          <h4 className="mb-3 mt-8 text-xl font-bold text-gray-900">
            What makes canyoning wetsuits different from other wetsuits?
          </h4>
          <p className="mb-4 text-lg leading-relaxed">
            Canyoning wetsuits differ from diving wetsuits in that they have
            greater reinforcements in the knee, elbow and seat areas, as these
            are the areas where we tend to lean and use more during the
            activity.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            <strong>
              Canyoning suits don&apos;t just protect us from the cold!
            </strong>{" "}
            It is a generalised idea that they only serve as insulation, but one
            of their main functions is to{" "}
            <strong>protect us from bumps and scratches</strong> against the
            stones or vegetation of the river bed.
            <br />
            <br />
            Another of its great functions, especially in living water, is to{" "}
            <strong>give us great buoyancy</strong>. They allow us to float
            easily in the water, saving energy and giving us extra safety in
            places where there is foam and the water is less dense.
          </p>
          <p className="mb-12 text-lg leading-relaxed">
            So these are the three main functions of canyoning wetsuits:{" "}
            <strong>
              it protects us from the cold, it protects us from impact and it
              helps us to float.
            </strong>
          </p>

          {/* ══════════════════════════════════════════
              Helmet
          ══════════════════════════════════════════ */}
          <h3 id="helmet" className="mb-4 text-2xl font-bold text-gray-900">
            Helmet
          </h3>

          {/* ── Image 4 ── */}
          <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src="/basic-equipment-4.webp"
              alt="Canyoning helmet"
              fill
              className="object-cover"
            />
          </div>

          <p className="mb-4 text-lg leading-relaxed">
            The various articles in the media and our own experience in many
            mountain sports (MTB, climbing, via ferratas, motorcycling…) have
            taught us that{" "}
            <strong>
              the helmet is one of the most fundamental elements of safety
            </strong>{" "}
            in many sports and mountain activities, including canyoning.
          </p>

          <h4 className="mb-3 mt-8 text-xl font-bold text-gray-900">
            What is the main function of a canyoning helmet?
          </h4>
          <p className="mb-4 text-lg leading-relaxed">
            When it comes to canyoning, the popular idea is that the helmet is
            only useful when you slip and fall. This is not the case. The
            biggest danger and{" "}
            <strong>
              the most important function of the helmet in canyoning is to
              absorb the impact of a stone falling from above
            </strong>{" "}
            in a narrow part of the canyon. This is the same kind of protection
            as in multi-pitch climbing, where one of the main dangers is the
            rocks falling from the highest part of the peak.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            The shell also protects you from being hit in areas with living
            water, where you are more exposed to the current, and in areas where
            you have to bend down to pass under a rock, a cave or a siphon.
          </p>

          <h4 className="mb-3 mt-8 text-xl font-bold text-gray-900">
            Can I use any helmet for canyoning?
          </h4>
          <p className="mb-4 text-lg leading-relaxed">
            Helmets must be approved for this sport, do not use bicycle helmets
            or other helmets that are not specifically designed for canyoning.
            Make sure that your helmet has no cracks or damaged absorbing
            elements. Good supervision and control of the equipment is also
            necessary.
          </p>
          <p className="mb-12 text-lg leading-relaxed">
            Remember that helmets for rafting or white water descents have their
            own homologation, which is slightly different from that for
            canyoning. Always check with your supplier or with your guides if
            they use a specific helmet for the activity.
          </p>

          {/* ══════════════════════════════════════════
              Harness
          ══════════════════════════════════════════ */}
          <h3 id="harness" className="mb-4 text-2xl font-bold text-gray-900">
            Harness
          </h3>

          {/* ── Image 5 ── */}
          <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src="/basic-equipment-5.webp"
              alt="Canyoning harness"
              fill
              className="object-cover"
            />
          </div>

          <p className="mb-4 text-lg leading-relaxed">
            A harness is a piece of equipment that has three main straps that
            are connected to each other and that surround our waist and thighs
            (the yellow thing that appears in the picture above). It&apos;s main
            purpose is to{" "}
            <strong>distribute the weight when we are hanging</strong>.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Today, there are many harnesses of different brands and qualities,
            ranging from simple harnesses to much more complex harnesses in
            terms of base material, reinforcements, belly ring area… We will not
            go into these details now. Brands such as Singing Rock (with more
            basic models and others more advanced), Fixe or Petzl (also with
            different qualities) are the most popular.
          </p>

          <h4 className="mb-3 mt-8 text-xl font-bold text-gray-900">
            What makes canyoning harness different from other harnesses?
          </h4>
          <p className="mb-4 text-lg leading-relaxed">
            The harness for canyon descents has the peculiarity of having a
            &apos;culera&apos;, a very resistant plastic canvas that{" "}
            <strong>protects the buttocks from rubbing</strong>. As we progress,
            we will be using our buttocks a lot, sliding on slides, crawling on
            rocks, descending… and it is essential not to tear the neoprene.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Harnesses can also be used to{" "}
            <strong>attach various canyoning accessories</strong>, such as
            abseiling equipment and lanyards, and will be useful in the event of
            an emergency where a person needs to be extracted from the canyon.
            Let&apos;s take a look to{" "}
            <strong>the two most used accessories</strong> for canyoning:
          </p>

          <h5 className="mb-3 mt-6 text-lg font-bold text-gray-900">
            Lanyards or &ldquo;bagas&rdquo;
          </h5>
          <p className="mb-4 text-lg leading-relaxed">
            The lanyards or anchoring ropes (&ldquo;baga&rdquo; in Spanish) are
            an essential element for safe canyoning. They will help you to carry
            out several important actions; to anchor yourself to the handrails,
            to anchor yourself to the meeting points or to anchor yourself to
            the leader or guide when rappelling. You can already deduce that{" "}
            <strong>their main function is to anchor you</strong> from your
            harness to something. They are basically a couple of ropes or straps
            with carabiners at the ends (The two red strips with black details
            in the photo above).
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Another function of the lanyard is to{" "}
            <strong>help your companions during the descent</strong>. If the
            descent is short, you can simply grab the carabiner of the lanyard
            to accompany your companion&apos;s descent or ascent. If the descent
            is longer, you can attach the lanyard carabiner to an auxiliary rope
            and descend with the rope. It is also common to make an escape knot
            on one of the carabiners of the lanyard at the moment of securing an
            additional abseil (this safety would be done by the guide or leader
            with the auxiliary rope). So the lanyard has many functions and
            these are only the main ones.
          </p>
          <p className="mb-3 text-lg leading-relaxed font-semibold">
            What kind of lanyard is suitable for canyoning?
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            The lanyard must be double and a certified lanyard is recommended.
            There are different types of baga that can be bought, such as FIXE
            (slightly longer) or PETZL (slightly shorter), but this depends on
            the user&apos;s preference. Although some canyoners choose to make
            their own lanyards with a rope and some carabiners and other
            accessories, professional guides and serious companies must use
            approved lanyards.
          </p>

          <h5 className="mb-3 mt-6 text-lg font-bold text-gray-900">
            Descenders
          </h5>
          <p className="mb-4 text-lg leading-relaxed">
            There are many options for descenders and choosing one is not easy.
            In an attempt to keep this article short and to the point, we will
            recommend the most common and perhaps most versatile, the classic
            &apos;eight&apos;.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Eights are a metal tool consisting of two circles, one large and one
            small, joined together to form the shape of an &ldquo;8&rdquo;
            (hence the name). They act as{" "}
            <strong>a safety tool, helping to control a descent.</strong> You
            can see it on the far right of the photo above, connecting the red
            rope to the central carabiner of the harness.
          </p>
          <p className="mb-12 text-lg leading-relaxed">
            In canyoning, they are used for several reasons: they allow you to
            descend quickly when rappelling and when you get down, the rope can
            be quickly removed; the rope can also be easily blocked to stop a
            descent; they allow many other manoeuvres such as blocks, lifts,
            clutches… In short, it offers{" "}
            <strong>the best balance between safety and versatility.</strong>
          </p>

          {/* ══════════════════════════════════════════
              Footwear
          ══════════════════════════════════════════ */}
          <h3 id="footwear" className="mb-4 text-2xl font-bold text-gray-900">
            Footwear
          </h3>

          {/* ── Image 6 ── */}
          <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src="/basic-equipment-6.webp"
              alt="Canyoning footwear"
              fill
              className="object-contain"
            />
          </div>

          <p className="mb-4 text-lg leading-relaxed">
            Footwear is also a fundamental element of safety in canyoning.{" "}
            <strong>The sole plays the most important role</strong> in safety
            and must be designed to provide the best possible grip on dry, wet
            or submerged rock surfaces.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            The best option is <strong>professional canyoning footwear</strong>{" "}
            which, in addition to providing optimum grip, is designed to
            withstand the aggressiveness of the environment and allow water to
            drain away more quickly. High socks are also recommended to prevent
            chafing and protect your ankles.
          </p>

          <h4 className="mb-3 mt-8 text-xl font-bold text-gray-900">
            Can I use any shoe for canyoning?
          </h4>
          <p className="mb-4 text-lg leading-relaxed">
            If you don&apos;t have professional canyoning boots, or can&apos;t
            rent them, a good option is to use hiking boots, preferably with a
            Vibram sole and lateral reinforcements.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Conventional running shoes are not usually the best option, as the
            soles are usually very plasticized and you will slip and lose your
            balance as you walk. However, this option is better than nothing.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            <strong>What is never allowed is open footwear</strong> such as
            flip-flops, water shoes or crocs, as you could easily slip and your
            toes could hit the rocks and break a phalanx. Even if they are
            closed, <strong>if the fit is poor or the sole is too soft</strong>,
            you could twist an ankle or injure the sole of your foot.
          </p>

          <h4 className="mb-3 mt-8 text-xl font-bold text-gray-900">
            Renting professional canyoning shoes
          </h4>
          <p className="mb-4 text-lg leading-relaxed">
            At TUUR Canyoning we offer the possibility of{" "}
            <strong>
              renting professional canyoning boots &ldquo;Bestard Aqua
              Pro&rdquo;
            </strong>{" "}
            (those in the photo below) for all your canyoning trips.
          </p>
          <p className="mb-12 text-lg leading-relaxed">
            <strong>Why don&apos;t we include them in the price?</strong> Unlike
            the rest of the canyoning equipment, canyoning shoes{" "}
            <strong>are an optional item</strong> because many travellers
            already bring their own hiking boots or prefer to use their own
            sports shoes and save some money this way. Of course,{" "}
            <strong>
              we recommend that you hire professional canyoning shoes
            </strong>{" "}
            if you can afford them, as you will notice the difference when
            wearing them (even if they are not brand new):{" "}
            <strong>you will feel safer and more confident</strong>, which will
            ensure you have a more enjoyable experience.
          </p>

          {/* ══════════════════════════════════════════
              Additional Equipment
          ══════════════════════════════════════════ */}
          <h3 id="additional" className="mb-4 text-2xl font-bold text-gray-900">
            Additional Equipment for Canyoning
          </h3>

          <p className="mb-4 text-lg leading-relaxed">
            The following items are not essential as they are usually included
            in the guide&apos;s backpack. But if you are thinking of going on
            your own, or are just curious, here are{" "}
            <strong>some optional canyoning items:</strong>
          </p>

          <ul className="mb-8 space-y-4 text-lg leading-relaxed">
            <li>
              <strong>Canyoning bag:</strong> This backpack is specially
              designed for canyoning and will hold all your extra items for the
              trip. They are usually made from PVC and have holes in the bottom
              to allow water to drain.
            </li>
            <li>
              <strong>Watertight canister:</strong> This is a very useful
              accessory to keep your belongings safe. You can put in some
              food/snacks, an extra headlamp in case the canyoning takes longer
              than planned, a mobile phone and an extra rope.
            </li>
            <li>
              <strong>A whistle:</strong> you can put it in your helmet or
              attach it to your backpack, and it will be useful to give signals
              in places where there are waterfalls or to give warnings over long
              distances.
            </li>
            <li>
              <strong>Knife:</strong> A tool that always comes in handy and can
              be used in hundreds of situations. It can be tied to the wrist and
              carried inside the neoprene sleeve, or tied to the bib with a
              fine, longer rope and carried inside the jacket. If you&apos;re
              venturing into living water, it&apos;s best to keep it in your
              sleeve and as close to your hand as possible.
            </li>
            <li>
              <strong>Neoprene shirt:</strong> This shirt is made of thin
              neoprene, elastane and polyamide. It can be used as an extra layer
              in cold canyons, or as an intermediate garment to combine with the
              wetsuit in canyons where the wetsuit is not required. It is a good
              investment if you do a lot of water sports, and there are very
              nice models for both girls and boys.
            </li>
          </ul>

          <p className="mb-12 text-lg leading-relaxed">
            There is a lot more hard rescue equipment that guides carry in their
            harness or backpack, such as ascenders, pulleys, different sized
            lanyards, grappling irons, plates, auxiliary ropes, first aid kit…
            But that&apos;s for another article.
          </p>

          {/* ══════════════════════════════════════════
              Conclusion
          ══════════════════════════════════════════ */}
          <h2 id="conclusion" className="mb-4 text-2xl font-bold text-gray-900">
            Conclusion
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            Now that you know the basic equipment for canyoning, you are aware
            that{" "}
            <strong>
              having the right equipment for canyoning is just as important as
              having the technical knowledge of{" "}
              <Link
                href="/blog/what-is-canyoneering"
                className="underline underline-offset-2 hover:text-orange-500 transition-colors"
              >
                <u>canyoning techniques</u>
              </Link>{" "}
              and knowing the canyon
            </strong>{" "}
            where you will be doing the activity.
          </p>
          <p className="mb-8 text-lg leading-relaxed">
            We hope that this article will help you to choose the right
            equipment when you start your own way in this beautiful sport, or
            when you hire a guide / tour company, so that you can choose the
            best service.
          </p>

          <p className="text-base text-gray-600">See you in another blog!</p>
          <p className="mt-1 text-base font-bold text-gray-900">
            TUUR Canyoning © 2026
          </p>
        </div>
      </div>
    </article>
  );
}

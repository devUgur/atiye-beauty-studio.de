import Image from "next/image";
import bodyFemale from "@/assets/body-female.png";
import bodyMale from "@/assets/body-male.png";
import bodyFemaleDark from "@/assets/body-female-dark.png";
import bodyMaleDark from "@/assets/body-male-dark.png";

export function BodyVisual({ gender }: { gender: "female" | "male" }) {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center pointer-events-none select-none sticky top-8">
            {/* Light Mode: Multiply Blend to hide White BG */}
            <Image
                src={gender === "female" ? bodyFemale : bodyMale}
                alt="Human Anatomy Light"
                fill
                className="object-contain mix-blend-multiply dark:hidden opacity-90 scale-110 origin-top"
                priority
            />
            {/* Dark Mode: Screen Blend to hide Black BG */}
            <Image
                src={gender === "female" ? bodyFemaleDark : bodyMaleDark}
                alt="Human Anatomy Dark"
                fill
                className="object-contain hidden dark:block mix-blend-screen opacity-90 scale-110 origin-top"
                priority
            />
        </div>
    );
}

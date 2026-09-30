import GameCard from '@/components/gameCard';

export default function Card() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-4 md:grid-cols-3 md:gap-6 sm:grid-cols-2 sm:gap-4 xs:grid-cols-1 xs:gap-2">

        <GameCard
          imageUrl="/GTA4.jpg"
          title="GTA IV"
          description="Action, Adventure, Open World"
        />

        <GameCard
          imageUrl="/spec.jpg"
          title="Spec Ops: The Line"
          description="Action, Adventure, Third-Person Shooter"
        />

        <GameCard
          imageUrl="/nfs.jpg"
          title="Need for Speed Payback"
          description="Racing, Action, Open World"
        />

        <GameCard
          imageUrl="/transformers.jpg"
          title="Transformers: War for Cybertron"
          description="Action, Shooter, Third-Person"
        />

        <GameCard
          imageUrl="/RememberMe.jpg"
          title="Remember Me"
          description="Action, Adventure, Third-Person"
        />

      </div>
    </>
  );
}
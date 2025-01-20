import React from 'react'

interface UserCard {
  title: string
  description: string
}

interface PrimaryUsersProps {
  title: string
  subtitle: string
  cards: UserCard[] // Dynamically render cards based on the array
}

const PrimaryUsers: React.FC<PrimaryUsersProps> = ({
  title,
  subtitle,
  cards,
}) => {
  return (
    <div className="bg-light-blue rounded-lg px-8 py-12">
      <h3 className="text-primary mb-2 text-lg font-bold">{title}</h3>
      <h2 className="mb-4 text-4xl font-extrabold">{subtitle}</h2>
      <p className="mb-8 text-lg">{subtitle}</p>
      <div
        className={`grid gap-6 ${
          cards.length === 3 ? 'grid-cols-3' : 'grid-cols-2'
        }`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-light-card rounded-lg p-6 text-center shadow-md"
          >
            <h4 className="mb-2 text-xl font-semibold">{card.title}</h4>
            <p className="text-md">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PrimaryUsers

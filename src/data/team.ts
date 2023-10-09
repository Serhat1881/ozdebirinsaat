type CouncilMember = {
    name: string;
    title: string;
    biography: string;
    image: string;
    alt: string;
};

export const chairPerson: CouncilMember = {
    name: 'test test',
    title: 'test',
    biography: `lore ipsum`,
    image: '/images/team-members/',
    alt: 'test isimler fotoğrafı',
};

export const councilMembers: CouncilMember[] = [
    {
        name: 'test test',
        title: 'test',
        biography: `lorem ipsum.`,
        image: '/images/team-members/',
        alt: 'test isimler fotoğrafı',
    },
    {
        name: 'test test',
        title: 'test',
        biography: `lorem ipsum.`,
        image: '/images/team-members/',
        alt: 'test isimler fotoğrafı',
    },
];

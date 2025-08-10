import images from "../../assets/images";

export const FavGameData = [
    { img: images.fc, title: 'EAFC 25' },
    { img: images.rocket_league, title: 'Rocket League' },
    { img: images.efootball, title: 'eFootball' },
    { img: images.street_fighter, title: 'Street Fighter 6' },
    { img: images.valorant, title: 'Valorant' },
    { img: images.hexacup, title: 'Hexa Cup' },
    { img: images.victory_road, title: 'Inazuma XI Victory Road' },
  ];



  type TournamentsDateSpotType = {
    id: number;
    leagueImage: any;
    title: string;
    startIn: string;
  };
  type SpotlightDateType = {
    id: number;
    pic: any;
    name: string;
    ranking: string;
  };
 export  const TournamentsData: TournamentsDateSpotType[] = [
    {
      id: 1,
      leagueImage: images.premiere_league,
      title: 'Premier League Showdown',
      startIn: 'Start in 3 days',
    },
    {
      id: 2,
      leagueImage: images.championship_cup,
      title: 'Champions Cup Clash',
      startIn: 'Start in 1 weeks',
    },
    {
      id: 3,
      leagueImage: images.euro_league,
      title: 'Euro League Face-Off',
      startIn: 'Start in 2 weeks',
    },
  ];
  export const SpotlightData: SpotlightDateType[] = [
    {
      id: 1,
      pic: images.lions,
      name: 'The Lions',
      ranking: 'Top ranked team',
    },
    {
      id: 2,
      pic: images.eagles,
      name: 'The Eagles',
      ranking: 'Rising stars',
    },
    {
      id: 3,
      pic: images.wolves,
      name: 'The Wolves',
      ranking: 'Community favorites',
    },
  ];
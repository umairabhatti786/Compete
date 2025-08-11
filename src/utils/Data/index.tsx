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



  type TournamentsDataSpotType = {
    id: number;
    leagueImage: any;
    title: string;
    startIn: string;
  };
  type SpotlightDataType = {
    id: number;
    pic: any;
    name: string;
    ranking: string;
  };
  type TournamentCardDataType = {
    id: number;
    Tournamentpic: any;
    Tournamentname: string;
    Tournamentranking: string;
  };
  type TeamDataType = {
    id: number;
    TeamLogo: any;
    TeamTitle: string;
  };
  type ClubDataType = {
    id: number;
    ClubLogo: any;
    ClubTitle: string;
    ClubTeam: string;
  };
  type MembersDataType = {
    id: number;
    MembersPic: any;
    MembersName: string;
    MembersPosts: string;
  };
  type LineupDataType = {
    id: number;
    PlayersPic: any;
    PlayersName: string;
    PlayersPosts: string;
  };
  type NotificationDataType = {
    id: number;
    NotificationPic: any;
    NotificationName: string;
    NotificationPosts: string;
    NotificationTime: string;
  };
 export  const TournamentsData: TournamentsDataSpotType[] = [
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
  export const SpotlightData: SpotlightDataType[] = [
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
  export const TournamentCard: TournamentCardDataType[] = [
    {
      id: 1,
      Tournamentpic: images.premiere_league_tournament,
      Tournamentname: 'Premiere League Tournament',
      Tournamentranking: '5v5 | 16 Teams | 32 Spots',
    },
    {
      id: 2,
      Tournamentpic: images.champions_cup,
      Tournamentname: 'Champions Cup',
      Tournamentranking: '7v7 | 8 Teams | 16 Spots',
    },
    {
      id: 3,
      Tournamentpic: images.world_cup_qualifier,
      Tournamentname: 'World Cup Qualifier',
      Tournamentranking: '11v11 | 32 Teams | 64 Spots',
    },
    {
      id: 4,
      Tournamentpic: images.league_cup,
      Tournamentname: 'League Cup',
      Tournamentranking: '5v5 | 16 Teams | 32 Spots',
    },
  ];
  export const TeamData: TeamDataType[] = [
    {
      id: 1,
      TeamLogo: images.fc_barcelona,
      TeamTitle: 'FC Barcelona',
    },
    {
      id: 2,
      TeamLogo: images.real_madrid,
      TeamTitle: 'Real Madrid',
    },
    {
      id: 3,
      TeamLogo: images.manchester_united,
      TeamTitle: 'Manchester United',
    },
    {
      id: 4,
      TeamLogo: images.bayern_munich,
      TeamTitle: 'Bayern Munich',
    },
    {
      id: 5,
      TeamLogo: images.juventus,
      TeamTitle: 'Juventus',
    },
    {
      id: 6,
      TeamLogo: images.paris_saint_germain,
      TeamTitle: 'Paris Saint-Germain',
    },
  ];
  export const Club: ClubDataType[] = [
    {
      id: 1,
      ClubLogo: images.barcelona,
      ClubTitle: 'Barcelona',
      ClubTeam: 'FC Barcelona',
    },
    {
      id: 2,
      ClubLogo: images.madrid,
      ClubTitle: 'Madrid',
      ClubTeam: 'Real Madrid',
    },
    {
      id: 3,
      ClubLogo: images.manchester,
      ClubTitle: 'Manchester',
      ClubTeam: 'Manchester United',
    },
    {
      id: 4,
      ClubLogo: images.liverpool,
      ClubTitle: 'Liverpool',
      ClubTeam: 'Liverpool FC',
    },
  ];
  export const Members: MembersDataType[] = [
    {
      id: 1,
      MembersPic: images.ethan_carter,
      MembersName: 'Ethan Carter',
      MembersPosts: 'Team Captain',
    },
    {
      id: 2,
      MembersPic: images.liam_harper,
      MembersName: 'Liam Harper',
      MembersPosts: 'Member',
    },
    {
      id: 3,
      MembersPic: images.noah_bennett,
      MembersName: 'Noah Bennett',
      MembersPosts: 'Member',
    },
    {
      id: 4,
      MembersPic: images.oliver_hayes,
      MembersName: 'Oliver Hayes',
      MembersPosts: 'Member',
    },
    {
      id: 5,
      MembersPic: images.elijah_foster,
      MembersName: 'Elijah Foster',
      MembersPosts: 'Member',
    },
    {
      id: 6,
      MembersPic: images.james_coleman,
      MembersName: 'James Coleman',
      MembersPosts: 'Member',
    },
  ];
  export const Roles: MembersDataType[] = [
    {
      id: 1,
      MembersPic: images.ethan,
      MembersName: 'Ethan Carter',
      MembersPosts: 'Captain',
    },
    {
      id: 2,
      MembersPic: images.liam,
      MembersName: 'Liam Harper',
      MembersPosts: 'MVP',
    },
    {
      id: 3,
      MembersPic: images.noah,
      MembersName: 'Noah Bennett',
      MembersPosts: 'Admin',
    },
    {
      id: 4,
      MembersPic: images.oliver,
      MembersName: 'Oliver Hayes',
      MembersPosts: 'Member',
    },
    {
      id: 5,
      MembersPic: images.elijah,
      MembersName: 'Elijah Foster',
      MembersPosts: 'Member',
    },
    {
      id: 6,
      MembersPic: images.lucas,
      MembersName: 'Lucas Reed',
      MembersPosts: 'Member',
    },
  ];
  export const Lineup: LineupDataType[] = [
    {
      id: 1,
      PlayersPic: images.lionel_messi,
      PlayersName: 'Lionel Messi',
      PlayersPosts: 'Forward',
    },
    {
      id: 2,
      PlayersPic: images.andres_iniesta,
      PlayersName: 'Andres Iniesta',
      PlayersPosts: 'Midfielder',
    },
    {
      id: 3,
      PlayersPic: images.gerard_pique,
      PlayersName: 'Gerard Pique',
      PlayersPosts: 'Defender',
    },
    {
      id: 4,
      PlayersPic: images.victor_valdes,
      PlayersName: 'Victor Valdes',
      PlayersPosts: 'Goalkeeper',
    },
  ];
  export const Notification: NotificationDataType[] = [
    {
      id: 1,
      NotificationPic: images.summer_cup,
      NotificationName: 'Tournament: Summer Cup',
      NotificationPosts: 'Tournament starts in 1 hour',
      NotificationTime: '1h',
    },
    {
      id: 2,
      NotificationPic: images.player_joined,
      NotificationName: 'New player joined',
      NotificationPosts: 'Team: The Mavericks',
      NotificationTime: '2h',
    },
    {
      id: 3,
      NotificationPic: images.summer_cup,
      NotificationName: 'Match results updated',
      NotificationPosts: 'Tournament: Winter League',
      NotificationTime: '3h',
    },
    {
      id: 4,
      NotificationPic: images.player_joined,
      NotificationName: 'New player joined',
      NotificationPosts: 'Team: The Falcons',
      NotificationTime: '4h',
    },
    {
      id: 4,
      NotificationPic: images.summer_cup,
      NotificationName: 'Match results updated',
      NotificationPosts: 'Tournament: Spring Series',
      NotificationTime: '5h',
    },
  ];
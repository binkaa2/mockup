const express = require('express');

const emojis = require('./emojis');

const router = express.Router();

router.get('/tournaments/:tournament_id/participants', (req, res) => {
  res.json({
    message: 'Success',
    data: [
      {
        participant_id: 'p#MMD',
        name: 'MainStay DefinedTerm Municipal Opportunities Fund',
        description: 'n/a',
        logo_url: 'https://storage.googleapis.com/iex/api/logos/MMD.png',
        sector_name: 'n/a',
        market_cap: '$546.13M',
        latest_price: '18.1400',
        latest_volume: '53767',
        updated_at: '2022-07-01T10:00:50+00:00',
        knocked_out: false,
        final_rank: null,
        total_scored: 0,
        total_matches: 1,
        total_points: 0,
        total_wins: 1,
        total_losses: 0,
        tournament: {
          tournament_id: 't#1',
          name: 'Tournament 1'
        },
        qualifier_group: null,
        tournament_group: null
      },
      {
        participant_id: 'p#MVO',
        name: 'MV Oil Trust',
        description: 'Oil & Gas Production',
        logo_url: 'https://storage.googleapis.com/iex/api/logos/MVO.png',
        sector_name: 'Energy',
        market_cap: '$71.65M',
        latest_price: '11.2500',
        latest_volume: '53208',
        updated_at: '2022-07-01T10:00:50+00:00',
        knocked_out: false,
        final_rank: null,
        total_scored: 0,
        total_matches: 1,
        total_points: 0,
        total_wins: 1,
        total_losses: 0,
        tournament: {
          tournament_id: 't#1',
          name: 'Tournament 1'
        },
        qualifier_group: null,
        tournament_group: null
      },
      {
        participant_id: 'p#MYN',
        name: 'Blackrock MuniYield New York Quality Fund, Inc.',
        description: 'n/a',
        logo_url: 'https://storage.googleapis.com/iex/api/logos/MYN.png',
        sector_name: 'n/a',
        market_cap: '$520.17M',
        latest_price: '10.6700',
        latest_volume: '40463',
        updated_at: '2022-07-01T10:00:50+00:00',
        knocked_out: false,
        final_rank: null,
        total_scored: 0,
        total_matches: 1,
        total_points: 0,
        total_wins: 1,
        total_losses: 0,
        tournament: {
          tournament_id: 't#1',
          name: 'Tournament 1'
        },
        qualifier_group: null,
        tournament_group: null
      },
      {
        participant_id: 'p#HMY',
        name: 'Harmony Gold Mining Company Limited',
        description: 'Precious Metals',
        logo_url: 'https://storage.googleapis.com/iex/api/logos/HMY.png',
        sector_name: 'Basic Industries',
        market_cap: '$734.96M',
        latest_price: '3.1300',
        latest_volume: '3795078',
        updated_at: '2022-07-01T10:00:50+00:00',
        knocked_out: false,
        final_rank: null,
        total_scored: 0,
        total_matches: 1,
        total_points: 0,
        total_wins: 1,
        total_losses: 0,
        tournament: {
          tournament_id: 't#1',
          name: 'Tournament 1'
        },
        qualifier_group: null,
        tournament_group: null
      }
    ],
    paginate: {
      total: 4
    }
  });
});

router.get('/tournaments/:tournament_id/matches', (req, res) => {
  res.json({
    message: 'Success',
    data: [
      {
        match_id: 'm#2',
        match_name: 'Match #2',
        match_description: 'Description for match #2',
        starting_at: '2022-06-16T00:00:00Z',
        ending_at: '2023-06-16T00:00:00Z',
        updated_at: '2022-06-16T00:00:00Z',
        tournament: {
          tournament_id: 't#1',
          name: 'Tournament 1'
        },
        qualifier_group: null,
        tournament_group: null,
        participants: [
          {
            participant_id: 'p#MMD',
            symbol: 'MMD',
            name: 'MainStay DefinedTerm Municipal Opportunities Fund',
            total_score: 0,
            total_points: 0,
            start_price: 0,
            final_price: 0
          },
          {
            participant_id: 'p#MVO',
            symbol: 'MVO',
            name: 'MV Oil Trust',
            total_score: 0,
            total_points: 0,
            start_price: 0,
            final_price: 0
          }
        ],
        rounds: [
          {
            match_id: 'm#2',
            participant_2_final_price: 0,
            participant_1_start_price: 0,
            participant_2_start_price: 0,
            participant_1_final_price: 0,
            participant_2_points: 0,
            participant_1_points: 0,
            ending_at: '2023-06-16T00:00:00Z',
            round_id: 'r#8',
            participant_2_score: 0,
            participant_1_score: 0,
            number: 3,
            starting_at: '2022-06-16T00:00:00Z'
          },
          {
            match_id: 'm#2',
            participant_2_final_price: 0,
            participant_1_start_price: 0,
            participant_2_start_price: 0,
            participant_1_final_price: 0,
            participant_2_points: 0,
            participant_1_points: 0,
            ending_at: '2023-06-16T00:00:00Z',
            round_id: 'r#9',
            participant_2_score: 0,
            participant_1_score: 0,
            number: 4,
            starting_at: '2022-06-16T00:00:00Z'
          },
          {
            match_id: 'm#2',
            participant_2_final_price: 0,
            participant_1_start_price: 0,
            participant_2_start_price: 0,
            participant_1_final_price: 0,
            participant_2_points: 0,
            participant_1_points: 0,
            ending_at: '2023-06-16T00:00:00Z',
            round_id: 'r#6',
            participant_2_score: 0,
            participant_1_score: 0,
            number: 1,
            starting_at: '2022-06-16T00:00:00Z'
          },
          {
            match_id: 'm#2',
            participant_2_final_price: 0,
            participant_1_start_price: 0,
            participant_2_start_price: 0,
            participant_1_final_price: 0,
            participant_2_points: 0,
            participant_1_points: 0,
            ending_at: '2023-06-16T00:00:00Z',
            round_id: 'r#7',
            participant_2_score: 0,
            participant_1_score: 0,
            number: 2,
            starting_at: '2022-06-16T00:00:00Z'
          },
          {
            match_id: 'm#2',
            participant_2_final_price: 0,
            participant_1_start_price: 0,
            participant_2_start_price: 0,
            participant_1_final_price: 0,
            participant_2_points: 0,
            participant_1_points: 0,
            ending_at: '2023-06-16T00:00:00Z',
            round_id: 'r#10',
            participant_2_score: 0,
            participant_1_score: 0,
            number: 5,
            starting_at: '2022-06-16T00:00:00Z'
          }
        ]
      },
      {
        match_id: 'm#1',
        match_name: 'Match #1',
        match_description: 'Description for match #1',
        starting_at: '2022-06-16T00:00:00Z',
        ending_at: '2023-06-16T00:00:00Z',
        updated_at: '2022-06-16T00:00:00Z',
        tournament: {
          tournament_id: 't#1',
          name: 'Tournament 1'
        },
        qualifier_group: null,
        tournament_group: null,
        participants: [
          {
            participant_id: 'p#MYN',
            symbol: 'MYN',
            name: 'Blackrock MuniYield New York Quality Fund, Inc.',
            total_score: 0,
            total_points: 0,
            start_price: 0,
            final_price: 0
          },
          {
            participant_id: 'p#HMY',
            symbol: 'HMY',
            name: 'Harmony Gold Mining Company Limited',
            total_score: 0,
            total_points: 0,
            start_price: 0,
            final_price: 0
          }
        ],
        rounds: [
          {
            match_id: 'm#1',
            participant_2_final_price: 0,
            participant_1_start_price: 0,
            participant_2_start_price: 0,
            participant_1_final_price: 0,
            participant_2_points: 0,
            participant_1_points: 0,
            ending_at: '2023-06-16T00:00:00Z',
            round_id: 'r#4',
            participant_2_score: 0,
            participant_1_score: 0,
            number: 4,
            starting_at: '2022-06-16T00:00:00Z'
          },
          {
            match_id: 'm#1',
            participant_2_final_price: 0,
            participant_1_start_price: 0,
            participant_2_start_price: 0,
            participant_1_final_price: 0,
            participant_2_points: 0,
            participant_1_points: 0,
            ending_at: '2023-06-16T00:00:00Z',
            round_id: 'r#1',
            participant_2_score: 0,
            participant_1_score: 0,
            number: 1,
            starting_at: '2022-06-16T00:00:00Z'
          },
          {
            match_id: 'm#1',
            participant_2_final_price: 0,
            participant_1_start_price: 0,
            participant_2_start_price: 0,
            participant_1_final_price: 0,
            participant_2_points: 0,
            participant_1_points: 0,
            ending_at: '2023-06-16T00:00:00Z',
            round_id: 'r#2',
            participant_2_score: 0,
            participant_1_score: 0,
            number: 2,
            starting_at: '2022-06-16T00:00:00Z'
          },
          {
            match_id: 'm#1',
            participant_2_final_price: 0,
            participant_1_start_price: 0,
            participant_2_start_price: 0,
            participant_1_final_price: 0,
            participant_2_points: 0,
            participant_1_points: 0,
            ending_at: '2023-06-16T00:00:00Z',
            round_id: 'r#3',
            participant_2_score: 0,
            participant_1_score: 0,
            number: 3,
            starting_at: '2022-06-16T00:00:00Z'
          },
          {
            match_id: 'm#1',
            participant_2_final_price: 0,
            participant_1_start_price: 0,
            participant_2_start_price: 0,
            participant_1_final_price: 0,
            participant_2_points: 0,
            participant_1_points: 0,
            ending_at: '2023-06-16T00:00:00Z',
            round_id: 'r#5',
            participant_2_score: 0,
            participant_1_score: 0,
            number: 5,
            starting_at: '2022-06-16T00:00:00Z'
          }
        ]
      }
    ],
    paginate: {
      total: 2
    }
  });
});

router.get('/tournaments/:tournament_id/final-ranking', (req, res) => {
  res.json({
    message: 'Success',
    data: {
      '1st': {
        match_id: 'm#2',
        updated_at: '2022-06-30T14:40:50+00:00',
        market_cap: '$546.13M',
        sector_name: 'n/a',
        participant_id: 'p#MMD',
        symbol: 'MMD',
        latest_price: '18.4300',
        description: 'n/a',
        name: 'MainStay DefinedTerm Municipal Opportunities Fund',
        latest_volume: '57366',
        logo_url: 'https://storage.googleapis.com/iex/api/logos/MMD.png'
      },
      '2nd': {
        match_id: 'm#2',
        updated_at: '2022-06-30T14:40:50+00:00',
        market_cap: '$71.65M',
        sector_name: 'Energy',
        participant_id: 'p#MVO',
        symbol: 'MVO',
        latest_price: '11.7200',
        description: 'Oil & Gas Production',
        name: 'MV Oil Trust',
        latest_volume: '62781',
        logo_url: 'https://storage.googleapis.com/iex/api/logos/MVO.png'
      },
      '3rd': {
        match_id: 'm#1',
        updated_at: '2022-06-24T21:17:29+07:00',
        market_cap: '$734.96M',
        sector_name: 'Basic Industries',
        participant_id: 'p#HMY',
        symbol: 'HMY',
        latest_price: '3.1800',
        description: 'Precious Metals',
        name: 'Harmony Gold Mining Company Limited',
        latest_volume: '4717955',
        logo_url: 'https://storage.googleapis.com/iex/api/logos/HMY.png'
      }
    }
  });
});

router.get('/tournaments', (req, res) => {
  res.json({
    message: 'Success',
    data: [
      {
        tournament_id: 't#1',
        name: 'Tournament 1',
        description: 'Description for tournament 1',
        profile_image: 'https://dummyimage.com/600x400.png/dddddd/000000',
        logo: 'https://dummyimage.com/350x350.png/dddddd/000000',
        season: {
          season_id: 'c#1',
          name: 'Sesson 1',
          description: 'Description for session 1'
        },
        qualifiers_stage: null,
        group_stage: {
          participants: 4,
          starting_at: '2022-06-16T00:00:00Z',
          ending_at: '2023-06-16T00:00:00Z'
        },
        knockout_stage: null
      }
    ],
    paginate: {
      limit: 100,
      total: 1
    }
  });
});

router.get('/tournaments/:tournament_id/groups', (req, res) => {
  res.json({
    "message": "Success",
    "data": [
        {
            "group_id": "g#4",
            "name": "group 4",
            "description": "Description for group 3",
            "starting_at": "2022-06-16T00:00:00Z",
            "ending_at": "2023-06-16T00:00:00Z",
            "stage": {
                "stage_id": "s#2",
                "name": "final"
            }
        },
        {
            "group_id": "g#6",
            "name": "group 6",
            "description": "Description for group 3",
            "starting_at": "2022-06-16T00:00:00Z",
            "ending_at": "2023-06-16T00:00:00Z",
            "stage": {
                "stage_id": "s#4",
                "name": "semifinal"
            }
        },
        {
            "group_id": "g#5",
            "name": "group 5",
            "description": "Description for group 3",
            "starting_at": "2022-06-16T00:00:00Z",
            "ending_at": "2023-06-16T00:00:00Z",
            "stage": {
                "stage_id": "s#3",
                "name": "thirdplace"
            }
        }
    ],
    "paginate": {
        "limit": "10",
        "total": 3
    }
});
});


router.use('/emojis', emojis);

module.exports = router;

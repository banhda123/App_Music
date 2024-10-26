export const songs = [
  {
    id: 1,
    title: 'Faded',
    artist: 'Alan Walker',
    artwork: require('./songs/images/faded.jpg'),
    url: require('./songs/faded.mp3'),
    genre: 'Electronic',
  },
  {
    id: 2,
    title: 'Head Light',
    artist: 'Alan Walker',
    artwork: require('./songs/images/headlight.jpg'),
    url: require('./songs/headlight.mp3'),
    genre: 'Electronic',
  },
  {
    id: 3,
    title: 'Attention',
    artist: 'Charlie Puth',
    artwork: require('./songs/images/attention.jpg'),
    url: require('./songs/attention.mp3'),
    genre: 'Pop',
  },
  {
    id: 4,
    title: 'On My Way',
    artist: 'Alan Walker',
    artwork: require('./songs/images/on_my_way.jpg'),
    url: require('./songs/on_my_way.mp3'),
    genre: 'Electronic',
  },
  {
    id: 5,
    title: 'Dreamers',
    artist: 'Jung Kook',
    artwork: require('./songs/images/dreamers.jpg'),
    url: require('./songs/dreamers.mp3'),
    genre: 'K-Pop',
  },
  {
    id: 6,
    title: 'Wavin Flag',
    artist: 'K’Naan',
    artwork: require('./songs/images/wavinflag.jpg'),
    url: require('./songs/wavin_flag.mp3'),
    genre: 'World',
  },
  {
    id: 7,
    title: 'Rockabye',
    artist: 'Clean Bandit',
    artwork: require('./songs/images/rockabye.jpg'),
    url: require('./songs/rockabye.mp3'),
    genre: 'Pop',
  },
  {
    id: 8,
    title: "We Don’t Talk Anymore",
    artist: 'Charlie Puth',
    artwork: require('./songs/images/wdtam.jpg'),
    url: require('./songs/no_talk.mp3'),
    genre: 'Pop',
  },
  {
    id: 9,
    title: 'See You Again',
    artist: 'Charlie Puth',
    artwork: require('./songs/images/without_my_friend.jpg'),
    url: require('./songs/see_you_again.mp3'),
    genre: 'Pop',
  },
  {
    id: 10,
    title: 'Dark Side',
    artist: 'Sabrina',
    artwork: require('./songs/images/darkside.jpg'),
    url: require('./songs/darkside.mp3'),
    genre: 'Electronic',
  },
  {
    id: 11,
    title: 'Gác Lại Âu Lo',
    artist: 'Da LAB; Miu Lê',
    artwork: require('./songs/images/Gaclaiaulo.jpg'),
    url: require('./songs/01.mp3'),
    genre: 'Vietnamese',
  },
  {
    id: 12,
    title: 'Khác Biệt To Lớn',
    artist: 'Trịnh Thăng Bình; Liz Kim Cương',
    artwork: require('./songs/images/Khacbiettolon.jpg'),
    url: require('./songs/02.mp3'),
    genre: 'Vietnamese',
  },
  {
    id: 13,
    title: 'Nàng Thơ',
    artist: 'Hoàng Dũng',
    artwork: require('./songs/images/Nangtho.jpg'),
    url: require('./songs/03.mp3'),
    genre: 'Vietnamese',
  },
  {
    id: 14,
    title: 'Bỏ Lỡ Một Người',
    artist: 'Lê Bảo Bình',
    artwork: require('./songs/images/Bolomotnguoi.jpg'),
    url: require('./songs/04.mp3'),
    genre: 'Vietnamese',
  },
  {
    id: 15,
    title: 'Hai Chữ Đã Từng',
    artist: 'Như Việt; ACV',
    artwork: require('./songs/images/Haichudatung.jpg'),
    url: require('./songs/05.mp3'),
    genre: 'Vietnamese',
  },
  {
    id: 16,
    title: 'Chuyện Rằng',
    artist: 'Thịnh Suy',
    artwork: require('./songs/images/Chuyenrang.jpg'),
    url: require('./songs/06.mp3'),
    genre: 'Vietnamese',
  },
  {
    id: 17,
    title: 'Trời Hôm Nay Nhiều Mây Cực!',
    artist: 'Đen',
    artwork: require('./songs/images/Troihomnaynhieumaycuc.jpg'),
    url: require('./songs/07.mp3'),
    genre: 'Vietnamese',
  },
  {
    id: 18,
    title: 'Càng Trưởng Thành, Càng Cô Đơn',
    artist: 'Hồ Ngọc Hà',
    artwork: require('./songs/images/Cangtruongthanh.jpg'),
    url: require('./songs/08.mp3'),
    genre: 'Vietnamese',
  },
  {
    id: 19,
    title: 'Đi Cùng Em',
    artist: 'Minh Vương M4U; Lemon Climb; ACV',
    artwork: require('./songs/images/dicungem.jpg'),
    url: require('./songs/09.mp3'),
    genre: 'Vietnamese',
  },
  {
    id: 20,
    title: 'Mãi Mãi Không Phải Anh',
    artist: 'Thanh Bình',
    artwork: require('./songs/images/Maimaikhongphaianh.jpg'),
    url: require('./songs/10.mp3'),
    genre: 'Vietnamese',
  },
];

export const albums = [
  {
    id: 1,
    title: 'Chill Beats',
    artwork: require('./songs/images/AlbumNcs.jpg'),
    songs: [1, 2, 4], 
  },
  {
    id: 2,
    title: 'Pop Hits',
    artwork: require('./songs/images/AlbumPop.jpg'),
    songs: [3, 7, 8, 9], 
  },
  {
    id: 3,
    title: 'Global Vibes',
    artwork: require('./songs/images/AlbumGlobal.png'),
    songs: [5, 6], 
  },
  {
    id: 4,
    title: 'Vietnamese Hits',
    artwork: require('./songs/images/AlbumVietnamese.jpg'),
    songs: [11,12,13,14,15,16,17,18,19,20], 
  },
];
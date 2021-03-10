import GamesIcon from "../../../images/service-icons/games.svg"
import AudioIcon from "../../../images/service-icons/audio.svg"
import FilmIcon from "../../../images/service-icons/film.svg"
import MonsterIcon from "../../../images/service-icons/monster.svg"
import PlayerIcon from "../../../images/service-icons/player-2.svg"
import MasksIcon from "../../../images/service-icons/masks.svg"

export const getServiceIcon = icon => {
  switch (icon) {
    case "Game":
      return GamesIcon
    case "Audio":
      return AudioIcon
    case "Film":
      return FilmIcon
    case "Monster":
      return MonsterIcon
    case "Player":
      return PlayerIcon
    case "Masks":
      return MasksIcon
    default:
      return GamesIcon
  }
}

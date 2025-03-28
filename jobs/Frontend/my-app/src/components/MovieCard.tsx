import styled from 'styled-components';
import fallback_image from './../assets/image-load-failed.svg';
import { Link } from 'react-router-dom';

const StyledMovieCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 200px;
  width: 100%;
  align-items: center;
  align-self: baseline;
`;

const StyledMovieCardPoster = styled.img`
  border-radius: 10px;
  max-width: 150px;
  height: 225px;
  width: auto;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale3d(1.04, 1.04, 1.04);
  }
`;

const StyledMovieCardPlainText = styled.p`
  width: 100%;
  margin: 0;
  font-size: 0.75rem;
`;

const StyledMovieCardTitle = styled(StyledMovieCardPlainText)`
  font-weight: 700;
  font-size: 0.875rem;
`;

interface MovieCardProps {
  poster: string;
  name: string;
  rating: string;
  release_date: string;
  to: string;
}

export const MovieCard = ({
  poster,
  name,
  rating,
  release_date,
  to,
}: MovieCardProps) => {
  const formattedReleaseDate = release_date
    ? new Date(release_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Unknown';

  return (
    <StyledMovieCard>
      <Link to={to}>
        <StyledMovieCardPoster
          src={
            poster
              ? `https://image.tmdb.org/t/p/w200/${poster}`
              : fallback_image
          }
          alt="Movie poster"
          style={{
            opacity: poster ? 1 : 0.2,
          }}
        />
      </Link>
      <StyledMovieCardTitle>{name}</StyledMovieCardTitle>
      <StyledMovieCardPlainText>{rating}</StyledMovieCardPlainText>
      <StyledMovieCardPlainText>
        {formattedReleaseDate}
      </StyledMovieCardPlainText>
    </StyledMovieCard>
  );
};

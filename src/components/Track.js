import styled from "styled-components";

const TrackContainer = styled.tr`
    border-radius: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    transition: background 0.1s, transform 0.1s;

    &:hover {
        background: #fdedef;
        transform: scale(1.01);
    }
`;

const TrackField = styled.td`
    flex: 1
`;

const SongField = styled(TrackField)`
    display: flex;
    gap: 16px;
`;

const AlbumCover = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 4px;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const PlaylistField = styled(TrackField)`
    flex: 0 0 15%;
`;

function Track(props) {

    const track = props.track;
    const artist = track.artists[0];
    const album = track.album;
    const playlist = track.playlist;
    const playlistImage = playlist.images[playlist.images.length - 1].url;

    return (
        <TrackContainer className={props.className}>
            <SongField>
                <AlbumCover src={playlistImage}/>
                <TitleContainer>
                    <span>{track.name}</span>
                    <span>{artist.name}</span>
                </TitleContainer>
            </SongField>
            <TrackField>
                <span>{album.name}</span>
            </TrackField>
            <PlaylistField>
                <span>{playlist.name}</span>
            </PlaylistField>
        </TrackContainer>
    );

}

export default Track;
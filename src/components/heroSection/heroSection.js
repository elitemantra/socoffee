/* eslint-disable @next/next/no-img-element */
'use client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles  from './heroSection.module.scss';
import { CardActionArea } from '@mui/material';


export const HeroSection = ({stories} ) => {

    const handleCardClick = (story) => {
        console.log(story);
    }

    return (
        <>
            <div className={styles['hero-section']}>
                <div className={styles['hero-post']}>
                    <Card height="max-content" onClick={() => handleCardClick(stories[0])}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="40%"
                                image={stories[0].thumbnailUrl}
                                alt={stories[0].title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {stories[0].title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {stories[0].excerpt}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>


                {stories?.length && stories.slice(1).map((story) => (
                    <div key={story._id} className={styles['previous-hero-story']}>
                        <Card height="max-content" onClick={() => handleCardClick(story)}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={story.thumbnailUrl}
                                    alt={story.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {story.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {story.excerpt}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
};


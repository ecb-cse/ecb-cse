import fresh_tomatoes
import media

toy_story = media.Movie("Toy Story", "Boy and his toys", "http://trailers.apple.com//705/us/media/galleries/disney/toystory3/toystory3_img8_720.jpg", "https://www.youtube.com/watch?v=KYz2wyBy3kc")

avatar = media.Movie("Avatr", "Marine in space", "http://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/Avatar-poster-421587.jpg", "https://www.youtube.com/watch?v=EPTHpG7ovak")

chosat_jogani = media.Movie("Chosat Jogani", "Devi re dewaliye ramjaye", "/home/ravi/Downloads/bhajan/Ambe_maa.gif", "/home/ravi/Downloads/bhajan/Chausath Jogani - Mataji Mandir Mai Bhid Ghani - Rajasthani Devotional Songs.mp4")
movies = [toy_story, avatar, chosat_jogani]
fresh_tomatoes.open_movies_page(movies)

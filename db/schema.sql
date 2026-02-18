CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year INTEGER CHECK (YEAR > 1880),
    genre VARCHAR(64),
    image_url VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO games (title, year, genre, image_url, description) VALUES
('Call Of Duty', 2019, 'FPS', '/images/Call_of_Duty.webp', 'A battle royale game set in map last one standing wins'),
('Roblox', 2006, 'sandbox', '/images/Roblox.webp', 'A virtual world and game platform where users can create and play games'),
('Minecarft', 2009, 'open-world', '/images/minecraft.webp', 'A game where you are in a open world and you do anything'),
('God Of War', 2018, 'Action-Adventure', '/images/God_Of_War.webp', 'An action-adventure game based on Norse mythology'),
('GTA V', 2013, 'Action-Adventure', '/images/GTA5.webp', 'An action-adventure game set in the fictional state of San Andreas'),
('Uncharted 4', 2016, 'Action-Adventure', '/images/uncharted4.webp', 'An action-adventure game featuring the character Nathan Drake');

SELECT * FROM games;
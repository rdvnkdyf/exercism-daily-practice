

"""Solution to Ellen's Alien Game exercise."""


def new_aliens_collection(positions):
    return list( map(lambda position: Alien(position[0], position[1]), positions ) )



class Alien:

    total_aliens_created = 0

    def __init__(self, x, y, health=3):
        self.x_coordinate = x
        self.y_coordinate = y
        self.health = health

        Alien.total_aliens_created += 1


    def hit(self):
        self.health -= 1

    

    def is_alive(self):
        return self.health > 0

    def teleport(self, new_x, new_y):
        self.x_coordinate = new_x
        self.y_coordinate = new_y

    def collision_detection(self, other_alien):
        # return self.x_coordinate == other_alien.x_coordinate and self.y_coordinate == other_alien.y_coordinate
        # apparently this is supposed to not be implemented?
        return None
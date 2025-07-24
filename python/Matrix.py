class Matrix:
    def __init__(self, matrix_string):
        self.matrix=[[int(i) for i in mat.split()] for mat in matrix_string.split("\n")]

    def row(self, index):
        return self.matrix[index-1]

    def column(self, index):
        return [col[index-1] for col in self.matrix]

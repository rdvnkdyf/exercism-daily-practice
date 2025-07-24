class Node:
    def __init__(self, value, next=None):
        self._value = value
        self._next = next

    def value(self):
        return self._value

    def next(self):
        return self._next


class LinkedList:
    def __init__(self, values=[]):
        self._head = None
        self._counter = 0
        for value in values:
            self.push(value)

    def __len__(self):
        return self._counter

    def __iter__(self):
        node = self._head
        while node:
            yield node.value()
            node = node.next()
        
    def head(self):
        if not self._head:
            raise EmptyListException("The list is empty.")
        return self._head

    def push(self, value):
        self._head = Node(value, self._head)
        self._counter += 1

    def pop(self):
        if not self._head:
            raise EmptyListException("The list is empty.")
        value = self._head.value()
        self._head = self._head.next()
        self._counter -= 1
        return value

    def reversed(self):
        return LinkedList(self)

class EmptyListException(Exception):
    def __init__(self, message):
        self.message = message
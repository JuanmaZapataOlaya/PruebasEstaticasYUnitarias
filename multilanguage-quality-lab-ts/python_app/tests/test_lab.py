from python_app.palindromo import es_palindromo
#from utils import suma

def test_es_palindromo():
    assert es_palindromo("Radar") == True

def test_es_palindromo2():
    assert es_palindromo("anita lava la tina") == True

def test_es_palindromo3():
    assert es_palindromo("") == True

def test_es_palindromo4():
    assert es_palindromo("Python") == False
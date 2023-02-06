from flask import Flask, send_from_directory, session, request, redirect, url_for, jsonify
import os
import sqlalchemy as sa


app = Flask(__name__)

app.secret_key = 'ef1cdeb141277bcc7784c63aee89bd9dd49367fa82b0b4c327ac9a7eff639109'


def get_walked():
    constring = os.environ["DATABASE_URL"]
    md = sa.MetaData(constring, schema='dbo')
    
    with md.bind.connect() as cnxn:
    
        walked = sa.Table(
            "walked",
            md,
            sa.Column("record_id", sa.Integer, primary_key=True),
            sa.Column("distance", sa.Float, nullable=False),
            sa.Column("date", sa.DateTime, nullable=False),
            schema = 'dbo',
            extend_existing=True
        )
        query = sa.select(walked)
        os.environ['PGOPTIONS'] = '-c statement_timeout=10'
        result = cnxn.execute(query) 
        output = result.fetchall()
        print (output)
        # cnxn.commit()
        
    md.bind.dispose()
    
    return output
        
@app.route('/login', methods=['GET', 'POST'])
@app.route('/login.html', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['username'] = request.form['username']

        if 'username' in session and session['username'] == '1118':
            print (session['username'])
            return send_from_directory('build', 'about.html')
        else:
            return send_from_directory('build', 'index.html')
    return send_from_directory('build', 'login.html')

@app.route('/logout.html')
def logout():
    # remove the username from the session if it's there
    session.pop('username', None)
    return redirect(url_for('login'))

@app.route('/secret.html')
def secret():
    # remove the username from the session if it's there
    if 'username' in session and session['username'] == '1118':
        print (session['username'])
        return send_from_directory('build', 'about.html')
    else:
        return send_from_directory('build', 'index.html')


# Path for all the static files (compiled JS/CSS, etc.)
@app.route("/fetchwalk")
def fetchwalk():
    # if 'username' in session:
    if session['username'] == '1118':
        output = get_walked()
        return jsonify(output)
    else:
        return jsonify({'status':'not logged in'})



# Path for all the static files (compiled JS/CSS, etc.)
@app.route("/<path:path>")
def home(path):
    # if 'username' in session:
    if path.find('about') == -1 or (
        'username' in session
        and session['username'] == '1118'
        ):
        return send_from_directory('build', path)
    return redirect(url_for('login'))




if __name__ == "__main__":
    app.run(debug=True)
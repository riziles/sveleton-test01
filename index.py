from flask import Flask, send_from_directory, session, request, redirect, url_for
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
        print(result.fetchall())
        # cnxn.commit()
        
    md.bind.dispose()
        
@app.route('/login', methods=['GET', 'POST'])
@app.route('/login.html', methods=['GET', 'POST'])
@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['username'] = request.form['username']
        return redirect(url_for('login'))
    if 'username' in session:
        print (session['username'])
        return send_from_directory('build', 'index.html')
    return send_from_directory('build', 'login.html')

@app.route('/logout')
def logout():
    # remove the username from the session if it's there
    session.pop('username', None)
    return redirect(url_for('login'))


# Path for all the static files (compiled JS/CSS, etc.)
@app.route("/<path:path>")
def home(path):
    # if 'username' in session:
    if path.find('about') == -1 or 'username' in session:
        return send_from_directory('build', path)
    return redirect(url_for('login'))


if __name__ == "__main__":
    app.run(debug=True)
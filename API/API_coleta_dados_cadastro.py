from flask import *
from flask_cors import CORS
import json
from datetime import datetime
app = Flask(__name__)
CORS(app)
@app.route('/post', methods = ['POST'])
def create_record():
    try:
        record = json.loads(request.data)
        with open(f'./calls/calls.txt','a') as p:
            p.write(f'{request.data}\n')
        id_bot = record['id_bot']
        nome = record['nome']
        id_num = record['id_num']
        data_nasc = record['data_nasc']
        id2_num_char = record['id2_num_char']
        genero = record['genero']
        print(genero)
        with open(f'./data_bots/{id_bot}.csv', 'a',encoding='utf-8') as f:
            data = f'{datetime.now().time()},{nome},{id_num},{data_nasc},{id2_num_char},{genero}\n'
            print(data)
            f.write(data)
            f.close()
        response = jsonify(f'Envio concluido!')
        response.status_code = 201
    except Exception as err:
        response.jsonify(f'Erro ao processar a requisicao: {str(err)}')
        response.status_code = 500
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', '*')
    response.headers.add('Access-Control-Allow-Methods', '*')
    return response

app.run(debug=True)
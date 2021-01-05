/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    
    shadow1 = document.getElementById('shroot').attachShadow({mode:'open'})
    div = document.createElement('div')
    div.innerHTML = "I am a shadow"
    div.id='shadow1div'
    shadow1.append(div)
    shadow2 = div.attachShadow({mode:'open'})
    p = document.createElement('p')
    p.innerHTML = "I am a shadow2"
    p.id='shadow2p'
    shadow2.append(p)
    form = document.createElement('form')
    input = document.createElement('input')
    input.id = 'shadow2input'
    submit = document.createElement('input')
    submit.onclick = 'hello'
    submit.id = 'shadow2submit'
    submit.type = 'submit'
    form.append(input)
    form.append(submit)
	shadow2.append(form)
	form.addEventListener('submit', function(e){
        e.preventDefault;
        sayHi(input.value);
    }, false);


};

function sayHi(name)
{alert('Hi ' + name)};


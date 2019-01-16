BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(155) NOT NULL,
  password VARCHAR(155) NOT NULL,
  logged_in BOOLEAN NOT NULL
);

DROP TABLE IF EXISTS weeks CASCADE;

CREATE TABLE weeks(
  id SERIAL PRIMARY KEY NOT NULL,
  week_name VARCHAR(200) NOT NULL
);

DROP TABLE IF EXISTS tasks CASCADE;

CREATE TABLE tasks(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(155) NOT NULL,
  week_id INTEGER REFERENCES weeks(id)
  repo_link VARCHAR(200) NOT NULL,
);

DROP TABLE IF EXISTS logs CASCADE;

CREATE TABLE logs(
  id SERIAL PRIMARY KEY NOT NULL,
  completion BOOLEAN NOT NULL,
  confidence INTEGER,
  notes VARCHAR(1000),
  task_id INTEGER REFERENCES tasks(id),
  user_id INTEGER REFERENCES users(id)
);

insert into users (email, password, logged_in) values ('bgeri0@illinois.edu', '2kb3PLnlE3', true);
insert into users (email, password, logged_in) values ('kgeddes1@mysql.com', 'C7Zbx09', false);
insert into users (email, password, logged_in) values ('drickeard2@issuu.com', 'NlOb9zFWz', false);
insert into users (email, password, logged_in) values ('kpoundesford3@i2i.jp', '2EXhiV', true);
insert into users (email, password, logged_in) values ('tsebborn4@mapquest.com', 'm4amCd3zewy4', false);
insert into users (email, password, logged_in) values ('bsehorsch5@woothemes.com', 'qPstcGmT', false);
insert into users (email, password, logged_in) values ('dfilipputti6@xrea.com', 'FMoeaA7T', false);
insert into users (email, password, logged_in) values ('vbruckman7@dyndns.org', 'KarkdKo6p', false);
insert into users (email, password, logged_in) values ('jweatherburn8@prweb.com', 'Dhtv9LTA4C', true);
insert into users (email, password, logged_in) values ('cdrinkall9@japanpost.jp', 'WzIyMaSUl', false);
insert into users (email, password, logged_in) values ('jandryseka@sbwire.com', 'NEbDHN5Y6Mo', true);
insert into users (email, password, logged_in) values ('gclashb@pcworld.com', 'hNyxTIs', true);
insert into users (email, password, logged_in) values ('jsconesc@skyrock.com', 'Bcj70R', true);
insert into users (email, password, logged_in) values ('acoggingsd@go.com', '6eZ6Is', true);
insert into users (email, password, logged_in) values ('aandresene@wsj.com', 'oC0pgMCL6yaR', true);
insert into users (email, password, logged_in) values ('lfrankomf@webs.com', 'yOE408', true);
INSERT INTO weeks (week_name) values ('toolkit');


insert into tasks (name, repo_link) values ('Tin', 'http://domainmarket.com/lorem/vitae/mattis/nibh/ligula/nec.js?erat=vel&nulla=est&tempus=donec&vivamus=odio&in=justo&felis=sollicitudin&eu=ut&sapien=suscipit&cursus=a&vestibulum=feugiat&proin=et&eu=eros&mi=vestibulum&nulla=ac&ac=est&enim=lacinia&in=nisi&tempor=venenatis&turpis=tristique&nec=fusce&euismod=congue&scelerisque=diam&quam=id&turpis=ornare&adipiscing=imperdiet&lorem=sapien&vitae=urna&mattis=pretium&nibh=nisl&ligula=ut&nec=volutpat&sem=sapien&duis=arcu&aliquam=sed&convallis=augue&nunc=aliquam&proin=erat&at=volutpat&turpis=in&a=congue&pede=etiam&posuere=justo&nonummy=etiam&integer=pretium&non=iaculis&velit=justo&donec=in&diam=hac&neque=habitasse');
insert into tasks (name, repo_link) values ('Toughjoyfax', 'http://irs.gov/ligula/suspendisse/ornare/consequat/lectus/in.jpg?integer=duis&aliquet=bibendum&massa=felis&id=sed&lobortis=interdum&convallis=venenatis&tortor=turpis&risus=enim&dapibus=blandit&augue=mi&vel=in&accumsan=porttitor&tellus=pede&nisi=justo&eu=eu&orci=massa&mauris=donec&lacinia=dapibus&sapien=duis&quis=at&libero=velit&nullam=eu&sit=est&amet=congue');
insert into tasks (name, repo_link) values ('Hatity', 'http://youtube.com/eros/suspendisse/accumsan/tortor/quis.jsp?sapien=pede&a=justo&libero=lacinia&nam=eget&dui=tincidunt&proin=eget&leo=tempus&odio=vel&porttitor=pede&id=morbi&consequat=porttitor');
insert into tasks (name, repo_link) values ('Konklux', 'http://virginia.edu/nec/nisi/volutpat/eleifend/donec.json?sapien=eu&iaculis=felis&congue=fusce&vivamus=posuere&metus=felis&arcu=sed&adipiscing=lacus&molestie=morbi');
insert into tasks (name, repo_link) values ('Matsoft', 'https://digg.com/suspendisse/potenti.jsp?nascetur=vulputate&ridiculus=justo&mus=in&vivamus=blandit&vestibulum=ultrices&sagittis=enim&sapien=lorem&cum=ipsum&sociis=dolor&natoque=sit&penatibus=amet&et=consectetuer&magnis=adipiscing&dis=elit&parturient=proin&montes=interdum&nascetur=mauris&ridiculus=non&mus=ligula&etiam=pellentesque&vel=ultrices&augue=phasellus&vestibulum=id&rutrum=sapien&rutrum=in&neque=sapien&aenean=iaculis&auctor=congue&gravida=vivamus&sem=metus&praesent=arcu&id=adipiscing&massa=molestie&id=hendrerit&nisl=at&venenatis=vulputate&lacinia=vitae&aenean=nisl&sit=aenean&amet=lectus&justo=pellentesque&morbi=eget&ut=nunc&odio=donec&cras=quis&mi=orci&pede=eget&malesuada=orci&in=vehicula&imperdiet=condimentum&et=curabitur&commodo=in&vulputate=libero&justo=ut&in=massa&blandit=volutpat&ultrices=convallis&enim=morbi&lorem=odio&ipsum=odio&dolor=elementum&sit=eu&amet=interdum&consectetuer=eu&adipiscing=tincidunt&elit=in&proin=leo&interdum=maecenas&mauris=pulvinar&non=lobortis&ligula=est&pellentesque=phasellus&ultrices=sit&phasellus=amet&id=erat&sapien=nulla&in=tempus&sapien=vivamus&iaculis=in&congue=felis&vivamus=eu&metus=sapien');
insert into tasks (name, repo_link) values ('Span', 'http://google.ru/ultrices/posuere/cubilia.jpg?lectus=eget&pellentesque=semper&eget=rutrum&nunc=nulla&donec=nunc&quis=purus&orci=phasellus&eget=in&orci=felis&vehicula=donec&condimentum=semper&curabitur=sapien&in=a&libero=libero&ut=nam&massa=dui&volutpat=proin&convallis=leo&morbi=odio&odio=porttitor&odio=id&elementum=consequat&eu=in&interdum=consequat&eu=ut&tincidunt=nulla&in=sed&leo=accumsan&maecenas=felis&pulvinar=ut&lobortis=at&est=dolor&phasellus=quis&sit=odio&amet=consequat&erat=varius&nulla=integer&tempus=ac&vivamus=leo&in=pellentesque&felis=ultrices');
insert into tasks (name, repo_link) values ('Tin', 'http://cam.ac.uk/quam/nec/dui/luctus.png?erat=interdum&volutpat=venenatis&in=turpis&congue=enim&etiam=blandit&justo=mi&etiam=in&pretium=porttitor&iaculis=pede&justo=justo&in=eu&hac=massa&habitasse=donec&platea=dapibus&dictumst=duis&etiam=at&faucibus=velit&cursus=eu&urna=est&ut=congue&tellus=elementum&nulla=in&ut=hac&erat=habitasse&id=platea&mauris=dictumst&vulputate=morbi&elementum=vestibulum&nullam=velit&varius=id&nulla=pretium&facilisi=iaculis&cras=diam&non=erat&velit=fermentum&nec=justo&nisi=nec&vulputate=condimentum&nonummy=neque&maecenas=sapien&tincidunt=placerat&lacus=ante&at=nulla&velit=justo&vivamus=aliquam&vel=quis&nulla=turpis&eget=eget&eros=elit&elementum=sodales&pellentesque=scelerisque&quisque=mauris&porta=sit&volutpat=amet&erat=eros&quisque=suspendisse&erat=accumsan&eros=tortor&viverra=quis&eget=turpis&congue=sed&eget=ante&semper=vivamus&rutrum=tortor&nulla=duis&nunc=mattis&purus=egestas&phasellus=metus&in=aenean&felis=fermentum&donec=donec');
insert into tasks (name, repo_link) values ('Cardify', 'http://amazonaws.com/quis/augue/luctus.png?erat=nunc&nulla=vestibulum&tempus=ante&vivamus=ipsum&in=primis&felis=in&eu=faucibus&sapien=orci&cursus=luctus&vestibulum=et&proin=ultrices&eu=posuere&mi=cubilia&nulla=curae&ac=mauris&enim=viverra&in=diam&tempor=vitae&turpis=quam&nec=suspendisse&euismod=potenti&scelerisque=nullam&quam=porttitor&turpis=lacus&adipiscing=at&lorem=turpis&vitae=donec&mattis=posuere&nibh=metus&ligula=vitae&nec=ipsum&sem=aliquam&duis=non&aliquam=mauris&convallis=morbi&nunc=non&proin=lectus&at=aliquam&turpis=sit&a=amet&pede=diam&posuere=in&nonummy=magna&integer=bibendum&non=imperdiet&velit=nullam&donec=orci&diam=pede&neque=venenatis&vestibulum=non&eget=sodales&vulputate=sed&ut=tincidunt&ultrices=eu&vel=felis&augue=fusce&vestibulum=posuere&ante=felis&ipsum=sed&primis=lacus&in=morbi&faucibus=sem&orci=mauris&luctus=laoreet&et=ut&ultrices=rhoncus&posuere=aliquet&cubilia=pulvinar&curae=sed&donec=nisl&pharetra=nunc&magna=rhoncus&vestibulum=dui&aliquet=vel&ultrices=sem&erat=sed&tortor=sagittis&sollicitudin=nam&mi=congue&sit=risus&amet=semper&lobortis=porta&sapien=volutpat&sapien=quam&non=pede&mi=lobortis&integer=ligula&ac=sit&neque=amet');


INSERT INTO logs (completion, confidence, notes) values ('TRUE', '1', 'test database notes');


COMMIT;

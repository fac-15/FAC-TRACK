BEGIN;

INSERT INTO users
(email, password)
VALUES
('tmacalroy0@blog.com', '6sGtDViL'),
('ayakovlev1@eventbrite.com', 'p3O75d0cObBJ'),
('rrandal2@prnewswire.com', 'o0wlqqcGk'),
('mantonacci3@prweb.com', 'DIAOATNFL'),
('nskuce4@bloomberg.com', 'A8AKjfGM'),
('bgoodsir5@people.com.cn', 'B0iwlbxZF'),
('bpasmore6@sphinn.com', 'oLggxOi'),
('ifochs7@bloomberg.com', 'yS5A3Q5qsX'),
('ematiebe8@vistaprint.com', 'cfeLhBSsZkRo'),
('gcatanheira9@businessinsider.com', 'wIFS7o4X'),
('ckempstonea@paypal.com', 'BLSslyZu'),
('ckubisb@opera.com', 'CPinkYy5v'),
('gweerdenburgc@tamu.edu', 'DdvgjP'),
('rrapaportd@altervista.org', 'lusVRKN'),
('dnealone@earthlink.net', 'CRbKF8RFfJ'),
('mshortof@columbia.edu', 'IJzhtKepUJud');

INSERT INTO weeks
(week_name)
VALUES
('toolkit'),
('testing'),
('api'),
('node_1'),
('node_2'),
('postgres_sql'),
('authentication'),
('express');

INSERT INTO tasks
(name)
VALUES
('workshop_1'),
('workshop_2'),
('workshop_3'),
('workshop_4'),
('challenge_1'),
('challenge_2'),
('challenge_3');

INSERT INTO logs (completion, confidence, notes)
VALUES
(true, 2, 'vitae mattis nibh ligula nec sem'),
(false, 2, 'odio porttitor id consequat in'),
(true, 2, 'nec dui'),
(true, 2, 'eros vestibulum ac est lacinia nisi venenatis'),
(true, 1, 'blandit mi in porttitor pede justo eu'),
(false, 2, 'curabitur in libero ut massa volutpat convallis'),
(true, 2, 'nullam varius nulla facilisi cras non velit nec nis')
(false, 3, 'scelerisque mauris sit amet eros suspendisse'),
(true, 1, 'aliquam sit amet diam in'),
(false, 1, 'maecenas leo odio'),
(false, 1, 'vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet'),
(true, 3, 'turpis enim'),
(true, 2, 'elit proin interdum mauris non ligula pellentesque ultrices'),
(false, 3, 'est et tempus semper est quam pharetra'),
(true, 3, 'proin eu'),
(false, 3, 'lobortis sapien sapien non mi integer ac neque duis bibendum'),
(true, 2, 'proin risus'),
(true, 2, 'nec condimentum neque sapien'),
(false, 1, 'a ipsum integer a nibh'),
(true, 2, 'ante ipsum primis in'),
(true, 1, 'dictumst morbi vestibulum velit id pretium iaculis diam'),
(false, 1, 'curae nulla dapibus'),
(true, 2, 'luctus et ultrices'),
(true, 2, 'consectetuer adipiscing elit proin'),
(false, 3, 'blandit ultrices enim lorem ipsum dolor sit amet'),
(true, 3, 'tortor risus dapibus'),
(true, 2, 'pretium iaculis justo in hac'),
(false, 1, 'et'),
(false, 1, 'dapibus augue vel'),
(false, 2, 'nulla justo aliquam quis'),
(false, 3, 'penatibus et magnis dis parturient montes nascetur ridiculus mus etiam'),
(false, 1, 'massa tempor convallis nulla neque libero convallis'),
(true, 2, 'ante ipsum primis in faucibus orci luctus'),
(false, 1, 'felis fusce posuere felis sed lacus morbi sem mauris laoreet'),
(true, 3, 'vitae quam'),
(true, 3, 'eu mi nulla ac enim in tempor turpis nec euismod'),
(true, 2, 'at'),
(true, 2, 'parturient montes nascetur ridiculus'),
(true, 1, 'nam nulla'),
(false, 1, 'nullam sit amet turpis elementum ligula vehicula consequat'),
(false, 2, 'metus sapien ut nunc vestibulum ante ipsum primis in'),
(true, 2, 'vestibulum rutrum'),
(true, 2, 'metus arcu adipiscing molestie'),
(true, 1, 'neque sapien placerat ante nulla'),
(true, 2, 'maecenas tincidunt lacus at velit vivamus vel'),
(true, 3, 'dignissim vestibulum vestibulum ante ipsum'),
(true, 1, 'non sodales'),
(false, 2, 'placerat praesent blandit nam nulla integer pede justo lacinia'),
(false, 1, 'quam turpis adipiscing lorem vitae mattis nibh ligula nec sem');

COMMIT;

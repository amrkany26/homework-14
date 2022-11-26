const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, 'article 1 : </br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod sagittis nulla ut egestas. Maecenas quis ante nisl. Nulla gravida velit ipsum, ac blandit metus tincidunt in. In ornare est et mauris rutrum placerat. Donec vestibulum vulputate diam ut fringilla. Etiam convallis, quam id ultrices tristique, ipsum lorem viverra neque, non pretium augue mauris ac justo. Etiam imperdiet velit interdum purus posuere, in iaculis magna dapibus.Praesent sit amet libero vel augue tristique fermentum facilisis ac est. Donec lacus velit, porta et dolor eget, blandit egestas massa. Morbi sollicitudin dolor in lacinia fermentum. Vivamus pellentesque mollis nisi, vitae aliquet ligula efficitur faucibus. Aenean quam sapien, vulputate vitae luctus convallis, sagittis eget est. Vestibulum quis porttitor justo, finibus congue mauris. Donec ut tincidunt sapien. Nulla facilisi. Proin dictum felis eget elit hendrerit posuere. Donec vitae sapien lectus. Quisque ac elementum est. Vestibulum facilisis lorem non risus ultrices, vel porta lectus feugiat. Sed iaculis nunc non lacus molestie tristique. Nunc quis ante eu risus gravida sagittis vitae eu arcu. Sed ac viverra ligula.In a ex sit amet lectus finibus mollis nec sit amet leo. Quisque tempor pellentesque nunc, id faucibus metus congue vitae. Vivamus dictum felis ut massa maximus, eget interdum ligula efficitur. Maecenas a leo condimentum, dictum quam nec, accumsan massa. Suspendisse id eros quis libero vulputate porttitor vel ornare neque. Integer fermentum nisi eget scelerisque accumsan. Cras pellentesque vulputate lobortis. Nam egestas dolor nisi, id luctus est dignissim ac. Vivamus vitae volutpat enim.</br></br></br></br>'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 5000, 'comment on article 1: </br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus, libero ac hendrerit egestas, dui nibh suscipit diam, eget feugiat erat leo sit amet orci. Vivamus ac purus id purus eleifend sagittis. Mauris venenatis faucibus fermentum. Vivamus at cursus lectus. Nam elementum magna quis ipsum lobortis, in efficitur lorem congue. Pellentesque vulputate semper massa dictum accumsan. In dapibus varius cursus. Nulla efficitur in est tincidunt feugiat. Curabitur volutpat eget enim at interdum. Nunc vulputate facilisis felis at egestas. Proin ullamcorper tortor vel odio euismod, faucibus volutpat sapien tristique. Donec in fringilla turpis. Ut mollis, lorem quis aliquet rhoncus, nunc ipsum auctor leo, at congue turpis ipsum et lorem. Nulla euismod lacinia diam, non efficitur diam auctor ut.'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => document.write(value));
Promise.any([promise3]).then((value) => document.write(value));


